import { AuthActionEnum, AuthActions } from 'src/actions/auth';

export type CurrentUser = {
  id: string;
  email: string;
};

const initialState = {
  currentUser: null,
};

export const auth = (state = initialState, action: AuthActions) => {
  switch (action.type) {
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
    case AuthActionEnum.LOGOUT:
      return {
        ...state,
        ...{ currentUser: null },
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
