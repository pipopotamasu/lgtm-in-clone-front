import { Post } from '../reducers/posts';

export enum PostsActionEnum {
  FETCH_POSTS = 'posts/FETCH_POSTS',
  FETCH_POST = 'posts/FETCH_POST',
  SELECT_POST = 'posts/SELECT_POST',
  CREATE_BOOKMARK = 'posts/CREATE_BOOKMARK',
  DELETE_BOOKMARK = 'posts/DELETE_BOOKMARK'
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

export const createBookmark = (postId: number) => {
  return {
    type: PostsActionEnum.CREATE_BOOKMARK,
    payload: postId
  };
};

interface CreateBookmarkAction extends ReturnType<typeof createBookmark> {
  type: PostsActionEnum.CREATE_BOOKMARK;
}

export const deleteBookmark = (postId: number) => {
  return {
    type: PostsActionEnum.DELETE_BOOKMARK,
    payload: postId
  };
};

interface DeleteBookmarkAction extends ReturnType<typeof deleteBookmark> {
  type: PostsActionEnum.DELETE_BOOKMARK;
}

export type PostsActions =
  | FetchPostsAction
  | FetchPostAction
  | SelectPostAction
  | CreateBookmarkAction
  | DeleteBookmarkAction;
