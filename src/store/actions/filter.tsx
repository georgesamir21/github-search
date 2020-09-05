import { AnyAction } from 'redux';

export const SET_FILTER = 'SET_FILTER';

export const setFilter = (textFilter: string): AnyAction => ({
  type: SET_FILTER,
  textFilter,
});
