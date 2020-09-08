import React from 'react';
import { IUsers } from '../../types/users';

const UserCard = (props: IUsers) => (
  <div className="card users-card">
    <div className="card_content">
      <div className="card_title">
        <img
          className="card_title__item card_title__image"
          src={props.avatar_url}
          alt={props.login + 'avatar'}
        />
        <h2 className="card_title__item card_title__text">{props.login}</h2>
      </div>
      <p className="card_content__item">
        <small>
          Type: <b className="text_primary">{props.type}</b>
        </small>
      </p>
    </div>
    <div className="card__action">
      <a
        className="card_content__item cta link"
        href={props.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub!
      </a>
    </div>
  </div>
);

export default UserCard;
