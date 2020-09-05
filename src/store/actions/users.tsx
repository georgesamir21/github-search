import { IUsers } from '../../types/users';
import { AnyAction } from 'redux';

export const GOT_USERS = 'GOT_USERS';

export const gotUsers = (users: IUsers[]): AnyAction => {
  return {
    type: GOT_USERS,
    result: users
  };
};
