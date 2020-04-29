import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from 'src/actions/globalMessages';
import { fetchPost as fetchPostCreator } from 'src/actions/posts';
import postsService from 'src/services/PostsService';

export default function useFetchPost() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPost = useCallback(
    async (id: number) => {
      setLoading(true);
      try {
        const res = await postsService.getPost(id);
        setLoading(false);
        dispatch(fetchPostCreator(res.data));
      } catch (e) {
        setLoading(false);
        dispatch(handleErrorMessageCreator(e.message));
      }
    },
    [dispatch]
  );
  return { fetchPost, loading };
}
