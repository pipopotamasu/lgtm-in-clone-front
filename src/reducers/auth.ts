import {
  AuthActionEnum,
  AuthActions
} from '../actions/auth';
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

const initialState = {
  auth0Client: Auth0Client
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionEnum.CREATE_CLIENT:
      return {
        ...state,
        ...{ auth0Client: action.payload }
      };
    default:
      return state;
  }
};
