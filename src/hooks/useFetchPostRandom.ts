import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from 'src/actions/globalMessages';
import { fetchPost as fetchPostCreator } from 'src/actions/posts';
import postsService from 'src/services/PostsService';

export default function useFetchPost() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPostRandom = useCallback(async () => {
    setLoading(true);
    try {
      const res = await postsService.getPostRandom();
      setLoading(false);
      dispatch(fetchPostCreator(res.data));
    } catch (e) {
      setLoading(false);
      dispatch(handleErrorMessageCreator(e.message));
    }
  }, [dispatch]);
  return { fetchPostRandom, loading };
}
