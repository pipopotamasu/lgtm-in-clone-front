import { combineReducers } from 'redux';
import postsReducer from './posts'
import { createStore } from 'redux';

export type AppState = {
  posts: ReturnType<typeof postsReducer>,
}

const reducers = combineReducers({
  posts: postsReducer,
})

export default createStore(reducers)
