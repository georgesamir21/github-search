import { createStore, Store, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import usersReducer from './reducers/usersReducer';
import reposReducer from './reducers/reposReducer';
import filterReducer from './reducers/filterReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  users: usersReducer,
  reposatories: reposReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export type AppState = ReturnType<typeof reducer>;

const store: Store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const presistor = persistStore(store);

export default store;
