import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  createAuth0Client as createAuth0ClientAction,
  fetchCurrentUser as fetchCurrentUserAction,
} from 'src/actions/auth';
import { useSelector } from 'react-redux';
import { AppState } from 'src/reducers/store';
import authOptions from '../auth_config.json';
import createAuth0Client from '@auth0/auth0-spa-js';
import { RootContext } from 'src/contexts/root';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth0Client = useSelector((state: AppState) => state.auth.auth0Client);
  const currentUser = useSelector((state: AppState) => state.auth.currentUser);
  const { $notification } = useContext(RootContext);

  const initAuth0 = useCallback(async () => {
    if (auth0Client) return;
    const auth0 = await createAuth0Client(authOptions);
    dispatch(createAuth0ClientAction(auth0));

    if (
      window.location.search.includes('code=') &&
      window.location.search.includes('state=')
    ) {
      await auth0.handleRedirectCallback();
      // refresh login query
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
      const user = await auth0.getUser();
      dispatch(fetchCurrentUserAction(user));
    }
  }, [dispatch, auth0Client]);

  const logout = useCallback(
    async (...p) => {
      if (auth0Client) {
        try {
          await auth0Client.logout(...p);
          dispatch(fetchCurrentUserAction(null));
        } catch (e) {
          $notification.error(e.message);
        }
      }
    },
    [dispatch, auth0Client, $notification]
  );

  const login = useCallback(
    async (...p) => {
      if (auth0Client) {
        try {
          await auth0Client.loginWithRedirect(...p);
        } catch (e) {
          $notification.error(e.message);
        }
      }
    },
    [auth0Client, $notification]
  );
  return { initAuth0, login, logout, currentUser };
};
