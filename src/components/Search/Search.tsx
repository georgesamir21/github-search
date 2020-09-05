import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setFilter, startApiSearch } from '../../store/actions/filter';
class Search extends Component<Props> {
  state = {
    filterType: 'users',
  };

  searchItems = [
    {
      value: 'users',
      label: 'Users',
    },
    {
      value: 'repositories',
      label: 'Repositories',
    }
  ];

  componentDidMount() {
    const selectedSearchFilter = this.searchItems.find(
      (searchItem) =>
        this.props.location.pathname.indexOf(searchItem.value) > -1
    );
    if (selectedSearchFilter) {
      this.setState({ filterType: selectedSearchFilter.value });
    }
  }

  startApiSearch = (textFilter: string, filterType: string) => {
    if (textFilter.trim().length >= 3) {
      this.props.startSearch(textFilter.trim(), filterType);
    }
  };

  debouncedSearch = debounce((textFilter: string, filterType: string) => {
    this.startApiSearch(textFilter, filterType);
  }, 500);

  selectChangeHandler = async (value: string) => {
    await this.setState({ filterType: value });
    this.props.history.push(`/${value}`);
    this.startApiSearch(this.props.textFilter, this.state.filterType);
  };

  searchInputChangeHandler = (value: string) => {
    this.props.onTextFilterChanged(value);
    this.debouncedSearch(value, this.state.filterType);
  };

  render() {
    return (
      <div>
        <div className="search-title">
          <img src="github_logo.png" alt="GitHub Logo" />
          <div>
            <h2>GitHub Searcher</h2>
            <p>Search users or reposatories below</p>
          </div>
        </div>
        <div>
          <input
            onChange={(e) => this.searchInputChangeHandler(e.target.value)}
            type="text"
            value={this.props.textFilter}
            placeholder="Start typing to search"
          />
          <select
            onChange={(e) => this.selectChangeHandler(e.target.value)}
            value={this.state.filterType}
          >
            {this.searchItems.map((searchItem) => (
              <option key={searchItem.value} value={searchItem.value}>
                {searchItem.label}
              </option>
            ))}
          </select>
        </div>
        <div>Searching for {this.props.textFilter}</div>
      </div>
    );
  }
}

interface LinkedStateProps {
  textFilter: string;
}

interface LinkedDispatchProps {
  onTextFilterChanged: (input: string) => void;
  startSearch: (textFilter: string, filterType: string) => void;
}

type Props = LinkedStateProps & LinkedDispatchProps & RouteComponentProps;

const mapStateToProps = (state: AppState) => {
  return {
    textFilter: state.filter.textFilter,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    onTextFilterChanged: (textFilter: string) =>
      dispatch(setFilter(textFilter)),
    startSearch: (textFilter: string, filterType: string) =>
      dispatch(startApiSearch(textFilter, filterType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
