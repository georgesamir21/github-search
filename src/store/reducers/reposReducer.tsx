import { Reducer, AnyAction } from 'redux';
import { GET_REPOS } from '../actions/repos';
import { IReposatories } from '../../types/reposatoreis';

const initialReposState: IReposatories[] = [];

const reducer: Reducer = (state = initialReposState, action: AnyAction) => {
  switch (action.type) {
    case GET_REPOS:
      return action.result;
    default:
      return state;
  }
};

export default reducer;
