import React from 'react';
import { IUsers } from '../../types/users';

// type Props = IUsers;

const UserCard = (props: IUsers) => (
  <div className="card users-card">
    <div className="card_title">
      <img
        className="card_title__item card_title__image"
        src={props.avatar_url}
        alt={props.login + 'avatar'}
      />
      <h2 className="card_title__item card_title__text">{props.login}</h2>
    </div>
    <div className="card_content">
      <p className="card_content__item">
        <small>
          Type: <b className="text_primary">{props.type}</b>
        </small>
      </p>
      <a className="link cta" href={props.html_url} target="_blank">
        View on GitHub!
      </a>
    </div>
  </div>
);

export default UserCard;
