import { Reducer, AnyAction } from 'redux';
import * as actionTypes from '../actions/repos';

const initialReposState: [] = [];


const reducer: Reducer = (state = initialReposState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return state.concat(action.result);
    default:
      return state;
      
  }
}

export default reducer;