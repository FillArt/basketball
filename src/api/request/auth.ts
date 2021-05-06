import { get, post } from './index'

export const userLogin = (url: string, body: string) => post(url, body, 'application/json');
export const userSignup = (url: string, body: string) => post(url, body, 'application/json');