import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { CurrentUser } from 'src/reducers/auth';

export enum AuthActionEnum {
  CREATE_CLIENT = 'auth/CREATE_CLIENT',
  SIGNUP = 'auth/SIGNUP',
  FETCH_CURRENT_USER = 'auth/FETCH_CURRENT_USER',
}

export const createAuth0Client = (auth0Client: Auth0Client) => {
  return {
    type: AuthActionEnum.CREATE_CLIENT as const,
    payload: auth0Client,
  };
};

export const signup = (user: CurrentUser) => {
  return {
    type: AuthActionEnum.SIGNUP as const,
    payload: user,
  };
};

export const fetchCurrentUser = (user: CurrentUser | null) => {
  return {
    type: AuthActionEnum.FETCH_CURRENT_USER as const,
    payload: user,
  };
};

export type AuthActions =
  | ReturnType<typeof createAuth0Client>
  | ReturnType<typeof signup>
  | ReturnType<typeof fetchCurrentUser>;
