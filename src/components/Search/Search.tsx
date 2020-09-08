import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setFilter, startApiSearch } from '../../store/actions/filter';

import './Search.scss';
import { clearUsersSearchResults } from '../../store/actions/users';
import { clearRepositoriesSearchResults } from '../../store/actions/repos';
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
    } else {
      filterType === 'users' ? this.props.clearUsersSearch() : this.props.clearRepositoriesSearch();
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
      <div className="search">
        <div className="search__title">
          <img className="search__tilte__image" src="github_logo.png" alt="GitHub Logo" />
          <div className="search__title__text">
            <h3>GitHub Searcher</h3>
            <p>Search users or reposatories below</p>
          </div>
        </div>
        <div className="search__form">
          <input
            className="search__form__input input-control"
            onChange={(e) => this.searchInputChangeHandler(e.target.value)}
            type="text"
            value={this.props.textFilter}
            placeholder="Start typing to search .."
          />
          <select
            className="search__form__input input-control"
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
  clearUsersSearch: () => void;
  clearRepositoriesSearch: () => void;
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
    clearUsersSearch: () => dispatch(clearUsersSearchResults()),
    clearRepositoriesSearch: () => dispatch(clearRepositoriesSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
