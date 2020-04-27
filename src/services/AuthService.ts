import axios from './BaseService';
import { CurrentUser } from '../reducers/auth';

export default {
  signup(email: string, password: string, passwordConfirmation: string) {
    return axios.post<CurrentUser>('/api/v1/signup', {
      email,
      password,
      passwordConfirmation
    });
  }
};
