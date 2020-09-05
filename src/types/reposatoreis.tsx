import { IUsers } from './users';

export interface IReposatories {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  fork: boolean;
  forks: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  owner: IUsers;
}
