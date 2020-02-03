import { Post } from '../reducers/posts';

export enum PostActions {
  FETCH_POSTS,
  SELECT_POST
}

export const fetchPosts = (posts: Post[]) => {
  return {
    type: PostActions.FETCH_POSTS,
    payload: posts
  };
};

// for Discriminated Unions
interface FetchPostsAction extends ReturnType<typeof fetchPosts> {
  type: PostActions.FETCH_POSTS;
}

export const selectPost = (post: Post) => {
  return {
    type: PostActions.SELECT_POST,
    payload: post
  };
};

interface SelectPostAction extends ReturnType<typeof selectPost> {
  type: PostActions.SELECT_POST;
}

export type PostsActions = FetchPostsAction | SelectPostAction;
