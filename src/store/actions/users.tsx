import { IUsers } from '../../types/users';
import { AnyAction } from 'redux';

export const GOT_USERS = 'GOT_USERS';
export const CLEAR_USERS_SEARCH_RESULTS = 'CLEAR_USERS_SEARCH_RESULTS';
export const gotUsers = (users: IUsers[]): AnyAction => {
  return {
    type: GOT_USERS,
    result: users
  };
};

export const clearUsersSearchResults = (): AnyAction => ({
  type: CLEAR_USERS_SEARCH_RESULTS
});
