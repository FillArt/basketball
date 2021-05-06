import { get, post } from './index'

export const teamsGet = (url: string, token?: string) => get(url, 'application/json', token);
export const teamsAdd = (url: string, body: string, token: string) => post(url, body, 'application/json', token);