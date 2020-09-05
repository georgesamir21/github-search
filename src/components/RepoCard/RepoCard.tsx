import React from 'react';
import { IReposatories } from '../../types/reposatoreis';


const RepoCard = (props: IReposatories) => (
  <div className="repo-card">
    <h3>{props.name}</h3>
    <h2>Owner</h2>
    <p>
      {props.owner.login} / {props.owner.html_url}
    </p>
    <p>
      {props.description}
    </p>

  </div>
);

export default RepoCard;
