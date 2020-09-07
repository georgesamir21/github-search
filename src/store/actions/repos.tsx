import { IReposatories } from '../../types/reposatoreis';
import { AnyAction } from 'redux';

export const GOT_REPOS = 'GOT_REPOS';
export const CLEAR_REPOSITORIES_SEARCH_RESULTS = 'CLEAR_REPOSITORIES_SEARCH_RESULTS';
export const gotRepos = (repos: IReposatories[]): AnyAction => {
  return {
    type: GOT_REPOS,
    result: repos,
  };
};

export const clearRepositoriesSearchResults = (): AnyAction => ({
  type: CLEAR_REPOSITORIES_SEARCH_RESULTS,
});
