import { Reducer, Action } from 'redux';

const initialUsersState: [] = [];

const reducer: Reducer = (state = initialUsersState, action: Action) => {
  switch (action.type) {
    case '':
      return state;
  
    default:
      return state;
      
  }
}

export default reducer;