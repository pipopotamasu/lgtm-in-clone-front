import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LgtmDetail from '../components/organisms/LgtmDetail';
import useFetchPostRandom from '../hooks/useFetchPostRandom';
import { AppState } from '../reducers/store';

const postSelectedSelector = (state: AppState) => state.posts.selected;

const PostDetail: React.FC = () => {
  const postSelected = useSelector(postSelectedSelector);
  const { fetchPostRandom, loading } = useFetchPostRandom();

  useEffect(() => {
    fetchPostRandom();
  }, [fetchPostRandom]);

  if (loading || !postSelected) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <LgtmDetail post={postSelected} />
    </div>
  );
};

export default PostDetail;
