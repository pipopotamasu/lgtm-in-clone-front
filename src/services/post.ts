import axios from './base';
import { Post } from 'src/reducers/posts';

export type PostSearchQuery = {
  bookmarked?: boolean;
};

export default {
  getPosts(query: PostSearchQuery = {}) {
    return axios.get<Post[]>('posts', {
      params: query,
    });
  },
  getPost(id: string) {
    return axios.get<Post>(`posts/${id}`);
  },
  getPostRandom() {
    return axios.get<Post>('posts/1'); // FIXME
  },
  createPost(form: FormData) {
    return axios.post<Post>('posts', form, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  },
  createBookmark(postId: number, userId: string) {
    return axios.post<void>(`posts/${postId}/bookmark`, {
      userId,
    });
  },
  deleteBookmark(postId: number, userId: string) {
    return axios.delete<void>(`posts/${postId}/bookmark`, {
      data: {
        userId,
      },
    });
  },
};
