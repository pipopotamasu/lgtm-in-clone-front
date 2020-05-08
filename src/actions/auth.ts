import { CurrentUser } from 'src/reducers/auth';

export enum AuthActionEnum {
  SIGNUP = 'auth/SIGNUP',
  LOGIN = 'auth/LOGIN',
  LOGOUT = 'auth/LOGOUT',
  FETCH_CURRENT_USER = 'auth/FETCH_CURRENT_USER',
}

export const signup = (user: CurrentUser) => {
  return {
    type: AuthActionEnum.SIGNUP as const,
    payload: user,
  };
};

export const login = (user: CurrentUser) => {
  return {
    type: AuthActionEnum.LOGIN as const,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: AuthActionEnum.LOGOUT as const,
  };
};

export const fetchCurrentUser = (user: CurrentUser | null) => {
  return {
    type: AuthActionEnum.FETCH_CURRENT_USER as const,
    payload: user,
  };
};

export type AuthActions =
  | ReturnType<typeof signup>
  | ReturnType<typeof login>
  | ReturnType<typeof logout>
  | ReturnType<typeof fetchCurrentUser>;
