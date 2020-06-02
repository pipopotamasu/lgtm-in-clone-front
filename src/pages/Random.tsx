import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LgtmDetail from 'src/components/organisms/LgtmDetail';
import { useFetchPostRandom } from 'src/hooks/useFetchPostRandom';
import { AppState } from 'src/reducers/store';

const postSelectedSelector = (state: AppState) => state.posts.selected;

const PostDetail: React.FC = () => {
  const postSelected = useSelector(postSelectedSelector);
  const { fetchPostRandom, loading } = useFetchPostRandom();

  useEffect(() => {
    fetchPostRandom();
  }, [fetchPostRandom]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!postSelected) {
    return <p>No post.</p>;
  }

  return (
    <div>
      <LgtmDetail post={postSelected} />
    </div>
  );
};

export default PostDetail;
