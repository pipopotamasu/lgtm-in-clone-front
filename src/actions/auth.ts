import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

export enum AuthActionEnum {
  CREATE_CLIENT = 'auth/CREATE_CLIENT',
  FETCH_CURRENT_USER = 'auth/FETCH_CURRENT_USER'
}

export const createAuth0Client = (auth0Client: Auth0Client) => {
  return {
    type: AuthActionEnum.CREATE_CLIENT,
    payload: auth0Client
  };
};

interface CreateAuth0ClientAction extends ReturnType<typeof createAuth0Client> {
  type: AuthActionEnum.CREATE_CLIENT;
}

export const fetchCurrentUser = (user: any) => {
  return {
    type: AuthActionEnum.FETCH_CURRENT_USER,
    payload: user
  };
};

interface FetchCurrentUserAction extends ReturnType<typeof fetchCurrentUser> {
  type: AuthActionEnum.FETCH_CURRENT_USER;
}

export type AuthActions = CreateAuth0ClientAction | FetchCurrentUserAction;
