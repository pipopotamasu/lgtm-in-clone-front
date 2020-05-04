import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  createBookmark as createBookmarkActionCreator,
  deleteBookmark as deleteBookmarkActionCreator,
} from 'src/actions/posts';
import { Post } from 'src/reducers/posts';
import { AppState } from 'src/reducers/store';
import { useSelector } from 'react-redux';
import { RootContext } from 'src/contexts/root';

const currentUserSelector = (state: AppState) => state.auth.currentUser;

export default function useFetchPosts() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const { $api, $notification } = useContext(RootContext);

  const createBookmark = useCallback(
    async (postId: number, userId: string) => {
      setLoading(true);
      try {
        await $api.post.createBookmark(postId, userId);
        setLoading(false);
        dispatch(createBookmarkActionCreator(postId));
        $notification.success('Bookmarked!');
      } catch (e) {
        setLoading(false);
        $notification.error(e.message);
      }
    },
    [dispatch, $api, $notification]
  );

  const deleteBookmark = useCallback(
    async (postId: number, userId: string) => {
      setLoading(true);
      try {
        await $api.post.deleteBookmark(postId, userId);
        setLoading(false);
        dispatch(deleteBookmarkActionCreator(postId));
      } catch (e) {
        setLoading(false);
        $notification.error(e.message);
      }
    },
    [dispatch, $api, $notification]
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
        $notification.info('Please login');
      }
    },
    [createBookmark, deleteBookmark, currentUser, loading, $notification]
  );

  return { createBookmark, deleteBookmark, onClickBookmark, loading };
}
