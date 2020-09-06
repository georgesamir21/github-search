import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { IUsers } from '../../types/users';
import UserCard from '../UserCard/UserCard';

const Users = (props: Props) => (
  <div className="search-result-container users-container">
    {props.users.map((user) => (
      <UserCard key={user.id} {...user} />
    ))}
  </div>
);

interface LinkedStateProps {
  users: IUsers[];
}

type Props = LinkedStateProps;

const mapStateToProps = (state: AppState) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
