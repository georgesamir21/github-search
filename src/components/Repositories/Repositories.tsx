import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { IReposatories } from '../../types/reposatoreis';
import RepoCard from '../RepoCard/RepoCard';

const Repositories = (props: Props) => (
  <div>
    {props.reposatories.map((repo) => (
      <RepoCard key={repo.id} {...repo} />
    ))}
  </div>
);

interface LinkedStateProps {
  reposatories: IReposatories[];
}

type Props = LinkedStateProps;

const mapStateToProps = (state: AppState) => {
  return {
    reposatories: state.reposatories,
  };
};

export default connect(mapStateToProps)(Repositories);
