import { combineReducers } from 'redux';
import postsReducer from './posts';
import globalMessagesReducer from './globalMessages';
import authReducer from './auth';
import { createStore } from 'redux';

export type AppState = {
  posts: ReturnType<typeof postsReducer>;
  globalMessages: ReturnType<typeof globalMessagesReducer>;
  auth: ReturnType<typeof authReducer>;
};

const reducers = combineReducers({
  posts: postsReducer,
  globalMessages: globalMessagesReducer,
  auth: authReducer,
});

export default createStore(reducers);
