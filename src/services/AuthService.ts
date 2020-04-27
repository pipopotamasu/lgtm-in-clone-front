import axios from './BaseService';
import { CurrentUser } from '../reducers/auth';

export default {
  signup(email: string, password: string, confirmPassword: string) {
    return axios.post<CurrentUser>('/signup', {
      email,
      password,
      confirmPassword,
    });
  },
};
