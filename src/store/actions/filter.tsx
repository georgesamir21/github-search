import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { baseApiUrl } from '../../environment/environment';
import { gotRepos } from './repos';
import { gotUsers } from './users';

export const SET_FILTER = 'SET_FILTER';
export const START_API_SEARCH = 'START_API_SEARCH';

export const setFilter = (textFilter: string): AnyAction => ({
  type: SET_FILTER,
  textFilter,
});

export const startApiSearch = (textFilter: string, filterType: string) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    const { data } = await axios.get(
      `${baseApiUrl}/${filterType}?q=${textFilter}`
    );
    switch (filterType) {
      case 'users':
        dispatch(gotUsers(data.items)) // dispatch got users;
        break;
      case 'repositories':
        dispatch(gotRepos(data.items)); // dispatch got reposatories;
        break;
    }
  };
};
