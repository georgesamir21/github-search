import { Reducer, Action } from 'redux';

const initialReposState: [] = [];

const reducer: Reducer = (state = initialReposState, action: Action) => {
  switch (action.type) {
    case '':
      return state;
  
    default:
      return state;
      
  }
}

export default reducer;