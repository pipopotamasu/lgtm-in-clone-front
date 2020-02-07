import { PostsActionEnum, PostsActions } from '../actions/posts';

export type Post = {
  id: number;
  src: string;
  userId: number;
  upvote: boolean;
  report: boolean;
  bookmarked: boolean;
};

type PostState = {
  list: Post[];
  selected: Post | null;
};

const initialState: PostState = {
  list: [],
  selected: null
};

export default (
  state: PostState = initialState,
  action: PostsActions
): PostState => {
  switch (action.type) {
    case PostsActionEnum.SELECT_POST:
      return {
        ...state,
        ...{ selected: action.payload }
      };
    case PostsActionEnum.FETCH_POST:
      return {
        ...state,
        ...{ selected: action.payload }
      };
    case PostsActionEnum.FETCH_POSTS:
      return {
        ...state,
        ...{ list: action.payload }
      };
    default:
      return state;
  }
};
