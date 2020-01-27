import { Post } from '../reducers/posts';

export enum PostActions {
  FETCH_POSTS,
  SELECT_POST
}

export const fetchPosts = () => {
  return {
    type: PostActions.FETCH_POSTS,
  }
}

interface fetchPostsAction extends ReturnType<typeof fetchPosts> {
  type: PostActions.FETCH_POSTS
}

export const selectPost = (post: Post) => {
  return {
    type: PostActions.SELECT_POST,
    payload: post
  }
}

interface selectPostAction extends ReturnType<typeof selectPost> {
  type: PostActions.SELECT_POST,
}

export type SelectPostAction = fetchPostsAction | selectPostAction;
