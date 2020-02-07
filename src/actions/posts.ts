import { Post } from '../reducers/posts';

export enum PostsActionEnum {
  FETCH_POSTS = 'posts/FETCH_POSTS',
  FETCH_POST = 'posts/FETCH_POST',
  SELECT_POST = 'posts/SELECT_POST'
}

export const fetchPosts = (posts: Post[]) => {
  return {
    type: PostsActionEnum.FETCH_POSTS,
    payload: posts
  };
};

// for Discriminated Unions
interface FetchPostsAction extends ReturnType<typeof fetchPosts> {
  type: PostsActionEnum.FETCH_POSTS;
}

export const fetchPost = (post: Post) => {
  return {
    type: PostsActionEnum.FETCH_POST,
    payload: post
  };
};

// for Discriminated Unions
interface FetchPostAction extends ReturnType<typeof fetchPost> {
  type: PostsActionEnum.FETCH_POST;
}

export const selectPost = (post: Post) => {
  return {
    type: PostsActionEnum.SELECT_POST,
    payload: post
  };
};

interface SelectPostAction extends ReturnType<typeof selectPost> {
  type: PostsActionEnum.SELECT_POST;
}

export type PostsActions =
  | FetchPostsAction
  | FetchPostAction
  | SelectPostAction;
