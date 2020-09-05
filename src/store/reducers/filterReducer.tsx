import { AnyAction, Reducer } from 'redux';
import { SET_FILTER } from '../actions/filter';

const initialFilteState = {
  textFilter: '',
};

const reducer: Reducer = (state = initialFilteState, action: AnyAction) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        textFilter: action.textFilter,
      };
    default:
      return state;
  }
};

export default reducer;
