import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';
import { fetchPosts as fetchPostsCreator } from '../actions/posts';
import postsService from '../services/PostsService';

export default function useFetchPosts(): [() => Promise<void>, boolean] {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await postsService.getPosts();
      setLoading(false);
      dispatch(fetchPostsCreator(res.data));
    } catch (e) {
      setLoading(false);
      dispatch(handleErrorMessageCreator(e.message));
    }
  }, [dispatch]);
  return [fetchPosts, loading];
}
