import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AuthService from 'src/services/AuthService';
import { useHistory } from 'react-router-dom';
import { signup as signupActionCreator } from 'src/actions/auth';
import { toast } from 'react-toastify';

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
        toast('Your account was created!', {
          position: "top-center",
          autoClose: 3000,
          type: "success"
        })
      } catch (e) {
        toast(e.message, {
          position: "top-center",
          autoClose: 10000,
          type: "error"
        })
        setLoading(false);
      }
    },
    [dispatch, history]
  );

  return { signup, loading };
}