import { Post } from '../reducers/posts';

export enum PostsActionEnum {
  FETCH_POSTS = 'posts/FETCH_POSTS',
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

export const selectPost = (post: Post) => {
  return {
    type: PostsActionEnum.SELECT_POST,
    payload: post
  };
};

interface SelectPostAction extends ReturnType<typeof selectPost> {
  type: PostsActionEnum.SELECT_POST;
}

export type PostsActions = FetchPostsAction | SelectPostAction;
