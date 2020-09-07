import { Reducer, AnyAction } from 'redux';
import { GOT_REPOS, CLEAR_REPOSITORIES_SEARCH_RESULTS } from '../actions/repos';
import { IReposatories } from '../../types/reposatoreis';

const initialReposState: IReposatories[] = [];

const reducer: Reducer = (state = initialReposState, action: AnyAction) => {
  switch (action.type) {
    case GOT_REPOS:
      return action.result;
    case CLEAR_REPOSITORIES_SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
};

export default reducer;
