import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts as fetchPostsActionCreator } from 'src/actions/posts';
import { PostSearchQuery } from 'src/services/post';
import { RootContext } from 'src/contexts/root';

export default function useFetchPosts() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { $api, $notification } = useContext(RootContext);

  const fetchPosts = useCallback(
    async (query?: PostSearchQuery) => {
      setLoading(true);
      try {
        const res = await $api.post.getPosts(query);
        setLoading(false);
        dispatch(fetchPostsActionCreator(res.data));
      } catch (e) {
        setLoading(false);
        $notification.error(e.message);
      }
    },
    [dispatch, $api, $notification]
  );
  return { fetchPosts, loading };
}
