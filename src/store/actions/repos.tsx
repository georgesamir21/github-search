import { IReposatories } from '../../types/reposatoreis';

export const GET_REPOS = 'GET_REPOS';

export const gotRepos = (repos: IReposatories[]) => {
  return {
    type: GET_REPOS,
    result: repos,
  };
};
