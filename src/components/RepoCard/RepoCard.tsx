import React from 'react';
import { IReposatories } from '../../types/reposatoreis';

const RepoCard = (props: IReposatories) => (
  <div className="card">
    <div className="card_content">
      <div className="card_title">
        <div className="card_title__item">
          <h2>{props.name}</h2>
          <small>{props.full_name}</small>
        </div>
      </div>
      <p className="card_content__item">{props.description}</p>
      <div className="card_content__item">
        Author:{' '}
        <b className="text_primary">
          <a href={props.owner.html_url} target="_blank" rel="noopener noreferrer">
            {props.owner.login}
          </a>
        </b>
        <br />
        <small>{props.owner.type}</small>
      </div>
      {props.fork ? (
        <p className="card_content__item">
          <b className="text_primary">Fork</b>
        </p>
      ) : (
        ''
      )}
      <p className="card_content__item">
        Stars: <b className="text_primary">{props.stargazers_count}</b>
      </p>
      <p className="card_content__item">
        Forks: <b className="text_primary">{props.forks_count}</b>
      </p>
      <p className="card_content__item">
        Watch: <b className="text_primary">{props.watchers_count}</b>
      </p>
      <p className="card_content__item">
        Issues: <b className="text_primary">{props.open_issues_count}</b>
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

export default RepoCard;
