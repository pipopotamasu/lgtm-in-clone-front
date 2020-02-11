import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';
import { fetchPost as fetchPostCreator } from '../actions/posts';
import postsService from '../services/PostsService';
import { useHistory } from 'react-router-dom';

type RT = [(file: string, userId: string) => Promise<void>, boolean];

export default function useCreatePost(): RT {
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
    [dispatch]
  );
  return [createPost, loading];
}
