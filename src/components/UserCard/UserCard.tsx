import React from 'react';
import { IUsers } from '../../types/users';

// type Props = IUsers;

const UserCard = (props: IUsers) => (
  <div>
    <h1>{props.login}</h1>
    <img src={props.avatar_url} alt={props.login + 'avatar'}  />
    <p>User type: {props.type}</p>
  </div>
);

export default UserCard;