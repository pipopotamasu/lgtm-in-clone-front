import axios from './BaseService';
import { Post } from '../reducers/posts';

export type PostSearchQuery = {
  bookmarked?: boolean;
};

export default {
  getPosts(query: PostSearchQuery = {}) {
    return axios.get<Post[]>('posts', {
      params: query
    });
  },
  getPost(id: number) {
    return axios.get<Post>(`posts/${id}`);
  },
  getPostRandom() {
    return axios.get<Post>('posts/1'); // FIXME
  },
  createPost(file: string, userId: string) {
    return axios.post<Post>('posts', {
      file,
      userId
    });
  },
  createBookmark(postId: number, userId: string) {
    return axios.post<void>(`posts/${postId}/bookmark`, {
      userId
    });
  },
  deleteBookmark(postId: number, userId: string) {
    return axios.delete<void>(`posts/${postId}/bookmark`, {
      data: {
        userId
      }
    });
  }
};
