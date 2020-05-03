import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleErrorMessage as handleErrorMessageCreator } from 'src/actions/globalMessages';
import {
  createBookmark as createBookmarkCreator,
  deleteBookmark as deleteBookmarkCreator,
} from 'src/actions/posts';
import postsService from 'src/services/post';
import { Post } from 'src/reducers/posts';
import { AppState } from 'src/reducers/store';
import { useSelector } from 'react-redux';

const currentUserSelector = (state: AppState) => state.auth.currentUser;

export default function useFetchPosts() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);

  const createBookmark = useCallback(
    async (postId: number, userId: string) => {
      setLoading(true);
      try {
        await postsService.createBookmark(postId, userId);
        setLoading(false);
        dispatch(createBookmarkCreator(postId));
      } catch (e) {
        setLoading(false);
        dispatch(handleErrorMessageCreator(e.message));
      }
    },
    [dispatch]
  );

  const deleteBookmark = useCallback(
    async (postId: number, userId: string) => {
      setLoading(true);
      try {
        await postsService.deleteBookmark(postId, userId);
        setLoading(false);
        dispatch(deleteBookmarkCreator(postId));
      } catch (e) {
        setLoading(false);
        dispatch(handleErrorMessageCreator(e.message));
      }
    },
    [dispatch]
  );

  const onClickBookmark = useCallback(
    async (post: Post) => {
      if (loading) return;
      if (currentUser) {
        if (post.bookmarked) {
          await deleteBookmark(post.id, currentUser.id);
        } else {
          await createBookmark(post.id, currentUser.id);
        }
      } else {
        // please login
      }
    },
    [createBookmark, deleteBookmark, currentUser, loading]
  );

  return { createBookmark, deleteBookmark, onClickBookmark, loading };
}
