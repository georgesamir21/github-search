import { createStore, Store, combineReducers } from 'redux';

import usersReducer from './reducers/usersReducer';
import reposReducer from './reducers/reposReducer';

const store: Store = createStore(combineReducers({
  users: usersReducer,
  reposatories: reposReducer
}));

store.subscribe(() => console.log(store.getState()));

export default store;