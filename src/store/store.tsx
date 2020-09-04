import { createStore, Store, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';
import reposReducer from './reducers/reposReducer';

const store: Store = createStore(combineReducers({
  users: usersReducer,
  reposatories: reposReducer
}), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;