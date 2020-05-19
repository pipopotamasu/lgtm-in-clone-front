import axios from './base';
import { CurrentUser } from 'src/reducers/auth';

export default {
  signup(email: string, password: string, confirmPassword: string) {
    return axios.post<CurrentUser>('/signup', {
      email,
      password,
      confirmPassword,
    });
  },
  login(email: string, password: string) {
    return axios.post<CurrentUser>('/login', {
      email,
      password,
    });
  },
  logout() {
    return axios.get<undefined>('/logout');
  },
  currentUser() {
    return axios.get<CurrentUser>('/current_user');
  },
};
