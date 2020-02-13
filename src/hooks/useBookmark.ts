
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from '../actions/globalMessages';
import { createBookmark as createBookmarkCreator, deleteBookmark as deleteBookmarkCreator } from '../actions/posts';
import postsService from '../services/PostsService';

export default function useFetchPosts() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createBookmark = useCallback(async (postId: number, userId: string) => {
    setLoading(true);
    try {
      await postsService.createBookmark(postId, userId);
      setLoading(false);
      dispatch(createBookmarkCreator(postId));
    } catch (e) {
      setLoading(false);
      dispatch(handleErrorMessageCreator(e.message));
    }
  }, [dispatch]);

  const deleteBookmark = useCallback(async (postId: number, userId: string) => {
    setLoading(true);
    try {
      await postsService.deleteBookmark(postId, userId);
      setLoading(false);
      dispatch(deleteBookmarkCreator(postId));
    } catch (e) {
      setLoading(false);
      dispatch(handleErrorMessageCreator(e.message));
    }
  }, [dispatch]);

  return { createBookmark, deleteBookmark, loading };
}
