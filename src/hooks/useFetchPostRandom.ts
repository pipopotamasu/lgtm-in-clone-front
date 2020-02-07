import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';
import { fetchPost as fetchPostCreator } from '../actions/posts';
import postsService from '../services/PostsService';

type RT = [() => Promise<void>, boolean];

export default function useFetchPost(): RT {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPostRandom = useCallback(
    async () => {
      setLoading(true);
      try {
        const res = await postsService.getPostRandom();
        setLoading(false);
        dispatch(fetchPostCreator(res.data));
      } catch (e) {
        setLoading(false);
        dispatch(handleErrorMessageCreator(e.message));
      }
    },
    [dispatch]
  );
  return [fetchPostRandom, loading];
}
