import { AnyAction, Dispatch, Action } from 'redux';
import axios from 'axios';
import { baseApiUrl } from '../../environment/environment';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../interfaces/AppState';
export const GET_REPOS = 'GET_REPOS';

const shit = (r: any) => {
  return {
    type: GET_REPOS,
    result: r
  }
}

export const getRepos = (payload: { repoName: string }) => {
  // console.log(payload)
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(`${baseApiUrl}/repos?q=${payload.repoName}`);
    dispatch(shit(data));
  }
}
