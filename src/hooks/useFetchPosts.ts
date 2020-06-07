import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts as fetchPostsActionCreator } from 'src/actions/posts';
import { PostSearchQuery } from 'src/services/post';
import { RootContext } from 'src/contexts/root';

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  const [, /* state */ setState] = useState();
  const { $api, $notification } = useContext(RootContext);

  const fetchPosts = useCallback(
    async (query?: PostSearchQuery) => {
      try {
        const res = await $api.post.getPosts(query);
        dispatch(fetchPostsActionCreator(res.data));
      } catch (e) {
        setState(() => {
          throw e;
        });
      }
    },
    [dispatch, $api, $notification]
  );
  return { fetchPosts };
};
