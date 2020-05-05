import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost as fetchPostActionCreator } from 'src/actions/posts';
import { RootContext } from 'src/contexts/root';

export const useFetchPostRandom = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { $api, $notification } = useContext(RootContext);

  const fetchPostRandom = useCallback(async () => {
    setLoading(true);
    try {
      const res = await $api.post.getPostRandom();
      setLoading(false);
      dispatch(fetchPostActionCreator(res.data));
    } catch (e) {
      setLoading(false);
      $notification.error(e.message);
    }
  }, [dispatch, $api, $notification]);
  return { fetchPostRandom, loading };
};
