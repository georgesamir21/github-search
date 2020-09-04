import { Reducer, AnyAction } from 'redux';
import * as actionTypes from '../actions/repos';
import store from '../store';

const initialReposState: [] = [];

const reducer: Reducer = (state = initialReposState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return state.concat(5555);
  
    default:
      return state;
      
  }
}

export default reducer;