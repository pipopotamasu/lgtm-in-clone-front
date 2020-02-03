import { combineReducers } from 'redux';
import postsReducer from './posts';
import globalMessagesReducer from './globalMessages';
import { createStore } from 'redux';

export type AppState = {
  posts: ReturnType<typeof postsReducer>;
};

const reducers = combineReducers({
  posts: postsReducer,
  globalMessages: globalMessagesReducer
});

export default createStore(reducers);
