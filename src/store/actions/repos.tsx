import { AnyAction } from 'redux';

export const GET_REPOS = 'GET_REPOS';

export const getRepos = (payload: { repoName: string }): AnyAction => ({ type: GET_REPOS, ...payload });
