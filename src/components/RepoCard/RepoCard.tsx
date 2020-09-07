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
          <a href={props.owner.html_url} target="_blank">
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

      {/* <div className="card_content__item owner-details">
        <h3>Owner details</h3>
        <h3>
          <a href={props.owner.html_url} target="_blank">
            {props.owner.login}
          </a>
        </h3>
        <p>
          <small>
            Type: <b className="text_primary">{props.owner.type}</b>
          </small>
        </p>
      </div> */}
    </div>
    <div className="card__action">
      <a
        className="card_content__item cta link"
        href={props.html_url}
        target="_blank"
      >
        View n GitHub!
      </a>
    </div>
  </div>
);

export default RepoCard;
