import { AuthActionEnum, AuthActions } from '../actions/auth';

export type CurrentUser = {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
};

const initialState = {
  auth0Client: null,
  currentUser: null
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionEnum.CREATE_CLIENT:
      return {
        ...state,
        ...{ auth0Client: action.payload }
      };
    case AuthActionEnum.FETCH_CURRENT_USER:
      return {
        ...state,
        ...{ currentUser: action.payload }
      };
    default:
      return state;
  }
};
