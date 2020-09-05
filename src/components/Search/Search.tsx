import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setFilter } from '../../store/actions/filter';
class Search extends Component<Props> {
  state = {
    searchFilter: '',
  };

  selectChangeHandler = (e: any) => {
    e.persist();
  };

  searchInputChangeHandler = (e: any) => {
    e.persist();
    this.props.onTextFilterChanged(e.target.value);
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
          <select onChange={this.selectChangeHandler}>
            <option value="users">Users</option>
            <option value="reposatories">Reposatories</option>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
