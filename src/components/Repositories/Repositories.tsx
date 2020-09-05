import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { AppState } from '../../interfaces/AppState';
import { ReposatoriesProps } from '../../interfaces/ReposatoreisProps';
import { AnyAction, Dispatch } from 'redux';
import { getRepos } from '../../store/actions/repos';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const Repositories = (props: ReposatoriesProps) => (
  <div>
    <p>Reposatories Component Works!</p>
    <p>{JSON.stringify(props.reposatories)}</p>
    <button onClick={props.testDispatch}>test dispatch</button>
  </div>
);

const mapStateToProps = (state: AppState) => {
  return {
    reposatories: state.reposatories,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    testDispatch: () => dispatch(getRepos({ repoName: 'react-redux' })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
