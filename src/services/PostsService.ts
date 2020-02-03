import axios from './BaseService';

export default {
  getPosts () {
    return axios.get('posts')
  }
}