import { combineReducers } from 'redux';
import { posts } from './posts';
import { auth } from './auth';
import { createStore } from 'redux';

export type AppState = {
  posts: ReturnType<typeof posts>;
  auth: ReturnType<typeof auth>;
};

const reducers = combineReducers({
  posts: posts,
  auth: auth,
});

export const store = createStore(reducers);
