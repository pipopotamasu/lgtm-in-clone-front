import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';
import { fetchPost as fetchPostCreator } from '../actions/posts';
import postsService from '../services/PostsService';

type RT = [(file: string, userId: string) => Promise<void>, boolean];

export default function useCreatePost(): RT {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createPost = useCallback(
    async (file: string, userId: string) => {
      setLoading(true);
      try {
        const res = await postsService.createPost(file, userId);
        dispatch(fetchPostCreator({
          id: 3,
          src: 'https://i.imgur.com/ZCyPUUt.jpg',
          userId: userId,
          upvote: false,
          report: false,
          bookmarked: false
        }));
        setLoading(false);
      } catch (e) {
        dispatch(handleErrorMessageCreator(e.message));
        setLoading(false);
      }
    },
    [dispatch]
  );
  return [createPost, loading];
}
