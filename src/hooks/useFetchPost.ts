import { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost as fetchPostActionCreator } from 'src/actions/posts';
import { RootContext } from 'src/contexts/root';

export const useFetchPost = () => {
  const dispatch = useDispatch();
  const [, /* state */ setState] = useState();
  const { $api } = useContext(RootContext);

  const fetchPost = useCallback(
    async (id?: string) => {
      try {
        const res = id
          ? await $api.post.getPost(id)
          : await $api.post.getPostRandom();
        dispatch(fetchPostActionCreator(res.data));
      } catch (e) {
        setState(() => {
          // Due to throwing to Error Boundary Component
          throw e;
        });
      }
    },
    [dispatch, $api]
  );
  return { fetchPost };
};
