import { AuthActionEnum, AuthActions } from 'src/actions/auth';

export type CurrentUser = {
  id: string;
  email: string;
};

const initialState = {
  auth0Client: null,
  currentUser: null,
};

export const auth = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionEnum.CREATE_CLIENT:
      return {
        ...state,
        ...{ auth0Client: action.payload },
      };
    case AuthActionEnum.SIGNUP:
      return {
        ...state,
        ...{ currentUser: action.payload },
      };
    case AuthActionEnum.LOGIN:
      return {
        ...state,
        ...{ currentUser: action.payload },
      };
    case AuthActionEnum.FETCH_CURRENT_USER:
      return {
        ...state,
        ...{ currentUser: action.payload },
      };
    default:
      return state;
  }
};
