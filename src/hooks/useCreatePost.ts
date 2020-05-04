import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost as fetchPostActionCreator } from 'src/actions/posts';
import { useHistory } from 'react-router-dom';
import { RootContext } from 'src/contexts/root';

export default function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { $api, $notification } = useContext(RootContext);

  const createPost = useCallback(
    async (file: string, userId: string) => {
      setLoading(true);
      try {
        const res = await $api.post.createPost(file, userId);
        dispatch(fetchPostActionCreator(res.data));
        setLoading(false);
        history.push(`/posts/${res.data.id}`);
        $notification.success('Your upload was successful!');
      } catch (e) {
        $notification.error(e.message);
        setLoading(false);
      }
    },
    [dispatch, history, $api, $notification] // Should history object pass throw from args? This might cause reassign func.
  );
  return { createPost, loading };
}
