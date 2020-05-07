import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login as loginActionCreator } from 'src/actions/auth';
import { RootContext } from 'src/contexts/root';

export type FormParams = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { $api, $notification } = useContext(RootContext);

  const login = useCallback(
    async (data: FormParams) => {
      setLoading(true);
      const { email, password } = data;
      try {
        const res = await $api.auth.login(email, password);
        setLoading(false);
        dispatch(loginActionCreator(res.data));
        history.push('/');
        $notification.success('Logged in!');
      } catch (e) {
        $notification.error(e.message);
        setLoading(false);
      }
    },
    [dispatch, history, $api, $notification]
  );

  return { login, loading };
};
