import { combineReducers } from 'redux';
import postsReducer from './posts';
import authReducer from './auth';
import { createStore } from 'redux';

export type AppState = {
  posts: ReturnType<typeof postsReducer>;
  auth: ReturnType<typeof authReducer>;
};

const reducers = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default createStore(reducers);
