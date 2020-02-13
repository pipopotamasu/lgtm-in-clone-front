import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';
import { fetchPost as fetchPostCreator } from '../actions/posts';
import postsService from '../services/PostsService';
import { useHistory } from 'react-router-dom';

export default function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const createPost = useCallback(
    async (file: string, userId: string) => {
      setLoading(true);
      try {
        const res = await postsService.createPost(file, userId);
        dispatch(fetchPostCreator(res.data));
        setLoading(false);
        history.push(`/posts/${res.data.id}`);
      } catch (e) {
        dispatch(handleErrorMessageCreator(e.message));
        setLoading(false);
      }
    },
    [dispatch, history] // Should history object pass throw from args? This might cause reassign func.
  );
  return { createPost, loading };
}
