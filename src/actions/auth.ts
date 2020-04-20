import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { CurrentUser } from '../reducers/auth';

export enum AuthActionEnum {
  CREATE_CLIENT = 'auth/CREATE_CLIENT',
  FETCH_CURRENT_USER = 'auth/FETCH_CURRENT_USER',
}

export const createAuth0Client = (auth0Client: Auth0Client) => {
  return {
    type: AuthActionEnum.CREATE_CLIENT as const,
    payload: auth0Client,
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
  | ReturnType<typeof fetchCurrentUser>;
