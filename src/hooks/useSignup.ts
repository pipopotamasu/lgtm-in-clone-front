import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AuthService from 'src/services/AuthService';
import { useHistory } from 'react-router-dom';
import { handleErrorMessage as handleErrorMessageActionCreator } from 'src/actions/globalMessages';
import { signup as signupActionCreator } from 'src/actions/auth';

export type FormParams = {
  email: string;
  password: string;
  confirmPassword: string;
};

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const signup = useCallback(
    async (data: FormParams) => {
      setLoading(true);
      const { email, password, confirmPassword } = data;
      try {
        const res = await AuthService.signup(email, password, confirmPassword);
        setLoading(false);
        dispatch(signupActionCreator(res.data));
        history.push(`/`);
      } catch (e) {
        dispatch(handleErrorMessageActionCreator(e.message));
        setLoading(false);
      }
    },
    [dispatch, history]
  );

  return { signup, loading };
}