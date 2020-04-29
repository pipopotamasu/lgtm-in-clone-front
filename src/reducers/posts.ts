import { PostsActionEnum, PostsActions } from 'src/actions/posts';
import produce from 'immer';

export type Post = {
  id: number;
  src: string;
  userId: string;
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
  selected: null,
};

export default (
  state: PostState = initialState,
  action: PostsActions
): PostState => {
  switch (action.type) {
    case PostsActionEnum.SELECT_POST:
      return {
        ...state,
        ...{ selected: action.payload },
      };
    case PostsActionEnum.FETCH_POST:
      return {
        ...state,
        ...{ selected: action.payload },
      };
    case PostsActionEnum.FETCH_POSTS:
      return {
        ...state,
        ...{ list: action.payload },
      };
    case PostsActionEnum.CREATE_BOOKMARK: {
      const postId = action.payload;
      const targetIndex = state.list.findIndex((post) => post.id === postId);

      return produce(state, (draftState) => {
        if (targetIndex !== -1) {
          const newPost = {
            ...draftState.list[targetIndex],
            ...{ bookmarked: true },
          };
          draftState.list[targetIndex] = newPost;
        }

        if (draftState.selected?.id === postId) {
          draftState.selected = {
            ...draftState.selected,
            ...{ bookmarked: true },
          };
        }
      });
    }
    case PostsActionEnum.DELETE_BOOKMARK: {
      const postId = action.payload;
      const targetIndex = state.list.findIndex((post) => post.id === postId);

      return produce(state, (draftState) => {
        if (targetIndex !== -1) {
          const newPost = {
            ...draftState.list[targetIndex],
            ...{ bookmarked: false },
          };
          draftState.list[targetIndex] = newPost;
        }

        if (draftState.selected?.id === postId) {
          draftState.selected = {
            ...draftState.selected,
            ...{ bookmarked: false },
          };
        }
      });
    }
    default:
      return state;
  }
};
