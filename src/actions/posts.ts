import { Post } from '../reducers/posts';

export enum PostsActionEnum {
  FETCH_POSTS = 'posts/FETCH_POSTS',
  FETCH_POST = 'posts/FETCH_POST',
  SELECT_POST = 'posts/SELECT_POST',
  CREATE_BOOKMARK = 'posts/CREATE_BOOKMARK',
  DELETE_BOOKMARK = 'posts/DELETE_BOOKMARK',
}

export const fetchPosts = (posts: Post[]) => {
  return {
    type: PostsActionEnum.FETCH_POSTS as const,
    payload: posts,
  };
};

export const fetchPost = (post: Post) => {
  return {
    type: PostsActionEnum.FETCH_POST as const,
    payload: post,
  };
};

export const selectPost = (post: Post) => {
  return {
    type: PostsActionEnum.SELECT_POST as const,
    payload: post,
  };
};

export const createBookmark = (postId: number) => {
  return {
    type: PostsActionEnum.CREATE_BOOKMARK as const,
    payload: postId,
  };
};

export const deleteBookmark = (postId: number) => {
  return {
    type: PostsActionEnum.DELETE_BOOKMARK as const,
    payload: postId,
  };
};

export type PostsActions =
  | ReturnType<typeof fetchPosts>
  | ReturnType<typeof fetchPost>
  | ReturnType<typeof selectPost>
  | ReturnType<typeof createBookmark>
  | ReturnType<typeof deleteBookmark>;
