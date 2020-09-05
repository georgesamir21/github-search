import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import store, { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setFilter, startApiSearch } from '../../store/actions/filter';
class Search extends Component<Props> {
  state = {
    filterType: 'users',
  };

  selectChangeHandler = async (e: any) => {
    e.persist();
    await this.setState({ filterType: e.target.value });
    this.props.startSearch(this.props.textFilter, this.state.filterType);
  };

  searchInputChangeHandler = (e: any) => {
    e.persist();
    this.props.onTextFilterChanged(e.target.value);
    // TODO:: need check debounce is working good!
    const debouncedSearch = debounce(
      (textFilter: string, filterType: string) => {
        if (textFilter.length >= 3) {
          // console.log('should search for', this.props.textFilter)
          this.props.startSearch(textFilter, filterType);
        }
      },
      500
    );

    debouncedSearch(this.props.textFilter, this.state.filterType);
    // console.log(this.props.textFilter, store.getState());
    // if (this.props.textFilter.length >= 3) {
    //   this.props.startSearch(this.props.textFilter, this.state.filterType);
    // }
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
            onChange={this.searchInputChangeHandler}
            type="text"
            value={this.props.textFilter}
            placeholder="Start typing to search"
          />
          <select
            onChange={this.selectChangeHandler}
            value={this.state.filterType}
          >
            <option value="users">Users</option>
            <option value="repositories">Repositories</option>
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

type Props = LinkedStateProps & LinkedDispatchProps;

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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
