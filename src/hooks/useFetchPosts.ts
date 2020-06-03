import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts as fetchPostsActionCreator } from 'src/actions/posts';
import { PostSearchQuery } from 'src/services/post';
import { RootContext } from 'src/contexts/root';

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  const { $api, $notification } = useContext(RootContext);

  const fetchPosts = useCallback(
    async (query?: PostSearchQuery) => {
      try {
        const res = await $api.post.getPosts(query);
        dispatch(fetchPostsActionCreator(res.data));
      } catch (e) {
        $notification.error(e.message);
      }
    },
    [dispatch, $api, $notification]
  );
  return { fetchPosts };
};
