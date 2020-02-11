import axios from './BaseService';
import { Post } from '../reducers/posts';

export default {
  getPosts() {
    return axios.get('posts');
  },
  getPost(id: number) {
    return axios.get(`posts/${id}`);
  },
  getPostRandom() {
    return axios.get('posts/1'); // FIXME
  },
  createPost(file: string, userId: string) {
    return axios.post('posts', {
      file,
      userId
    });
  }
};
