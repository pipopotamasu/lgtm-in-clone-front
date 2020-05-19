import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser as fetchCurrentUserActionCreator } from 'src/actions/auth';
import { AppState } from 'src/reducers/store';
import { useSelector } from 'react-redux';
import { RootContext } from 'src/contexts/root';

export const useCurrentUser = () => {
  const [loading, setLoading] = useState(false);
  const [haveFetched, setHaveFetched] = useState(false);
  const dispatch = useDispatch();
  const { $notification, $api } = useContext(RootContext);
  const currentUser = useSelector((state: AppState) => state.auth.currentUser);

  const fetchCurrentUser = useCallback(async () => {
    setHaveFetched(true);
    setLoading(true);
    try {
      const res = await $api.auth.currentUser();
      setLoading(false);
      dispatch(fetchCurrentUserActionCreator(res.data));
    } catch (e) {
      setLoading(false);
      if (e.response.status !== 302) {
        $notification.error(e.message);
      }
    }
  }, [dispatch, $api, $notification, setHaveFetched]);

  return { currentUser, fetchCurrentUser, loading, haveFetched };
};
