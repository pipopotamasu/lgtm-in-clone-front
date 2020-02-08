import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import
  {
    createAuth0Client as createAuth0ClientAction,
    fetchCurrentUser as fetchCurrentUserAction
  }
from '../actions/auth';
import { useSelector } from 'react-redux';
import { AppState } from '../reducers/store';
import authOptions from '../auth_config.json';
import createAuth0Client from "@auth0/auth0-spa-js";
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';

export default function useAuth() {
  const dispatch = useDispatch();
  const auth0Client = useSelector((state: AppState) => state.auth.auth0Client);
  const currentUser = useSelector((state: AppState) => state.auth.currentUser);

  const initAuth0 = useCallback(
    async () => {
      if (auth0Client) return;
      const auth0 = await createAuth0Client(authOptions);
      dispatch(createAuth0ClientAction(auth0));


      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        await auth0.handleRedirectCallback();
        // refresh login query
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const isAuthenticated = await auth0.isAuthenticated();

      if (isAuthenticated) {
        const user = await auth0.getUser();
        dispatch(fetchCurrentUserAction(user))
      }
    },
    [dispatch, auth0Client]
  )

  const logout = useCallback(
    async (...p) => {
      if (auth0Client) {
        try {
          await auth0Client.logout(...p);
          dispatch(fetchCurrentUserAction(null))
        } catch (e) {
          dispatch(handleErrorMessageCreator(e.message));
        }
      }
    },
    [dispatch, auth0Client]
  );

  const login = useCallback(
    async (...p) => {
      if (auth0Client) {
        try {
          await auth0Client.loginWithRedirect(...p);
        } catch (e) {
          dispatch(handleErrorMessageCreator(e.message));
        }
      }
    },
    [dispatch, auth0Client]
  );
  return { initAuth0, login, logout, currentUser };
}
