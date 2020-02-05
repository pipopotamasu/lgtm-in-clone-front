import axios from './BaseService';

export default {
  getPosts() {
    return axios.get('posts');
  },
  getPost(id: number) {
    return axios.get(`posts/${id}`);
  }
};
