import { PostActions, SelectPostAction } from '../actions/posts'

export type Post = {
  id: number,
  src: string,
  upvote: boolean,
  report: boolean,
  bookmarked: boolean
}

type PostState = {
  list: Post[],
  selected: Post | null
}

const initialState: PostState = {
  list: [
    { id: 1, src: 'https://i.imgur.com/8V3Mhu3.gif', upvote: false, report: false, bookmarked: false }
  ],
  selected: null
};

export default (state: PostState = initialState, action: SelectPostAction): PostState => {
  switch (action.type) {
    case PostActions.SELECT_POST:
      return {
        ...state,
        ...{ selected: action.payload }
      }
    case PostActions.FETCH_POSTS:
      return state;
    default:
      return state;
  }
}
