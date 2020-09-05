import { AnyAction, Dispatch, Action } from 'redux';
import axios from 'axios';
import { baseApiUrl } from '../../environment/environment';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../interfaces/AppState';
export const GET_REPOS = 'GET_REPOS';

const gotRepos = (repos: any) => {
  return {
    type: GET_REPOS,
    result: repos
  }
}

export const getRepos = (payload: { repoName: string }) => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(`${baseApiUrl}/repositories?q=${payload.repoName}`);
    console.log(data.items);
    dispatch(gotRepos(data.items));
  }
}
