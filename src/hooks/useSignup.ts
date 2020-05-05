import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup as signupActionCreator } from 'src/actions/auth';
import { RootContext } from 'src/contexts/root';

export type FormParams = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { $api, $notification } = useContext(RootContext);

  const signup = useCallback(
    async (data: FormParams) => {
      setLoading(true);
      const { email, password, confirmPassword } = data;
      try {
        const res = await $api.auth.signup(email, password, confirmPassword);
        setLoading(false);
        dispatch(signupActionCreator(res.data));
        history.push('/');
        $notification.success('Your account was created!');
      } catch (e) {
        $notification.error(e.message);
        setLoading(false);
      }
    },
    [dispatch, history, $api, $notification]
  );

  return { signup, loading };
};
