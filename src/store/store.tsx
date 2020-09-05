import { createStore, Store, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';
import reposReducer from './reducers/reposReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  users: usersReducer,
  reposatories: reposReducer,
  filter: filterReducer,
});

export type AppState = ReturnType<typeof reducer>;

const store: Store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()));

export default store;
