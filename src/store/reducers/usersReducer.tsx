import { Reducer, AnyAction } from 'redux';
import { IUsers } from '../../types/users';
import { GOT_USERS } from '../actions/users';

const initialUsersState: IUsers[] = [];

const reducer: Reducer = (state = initialUsersState, action: AnyAction) => {
  switch (action.type) {
    case GOT_USERS:
      return action.result;
    default:
      return state;
  }
};

export default reducer;
