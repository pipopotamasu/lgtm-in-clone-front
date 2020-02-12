import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LgtmDetail from '../components/organisms/LgtmDetail';
import useFetchPost from '../hooks/useFetchPost';
import { useSelector } from 'react-redux';
import { AppState } from '../reducers/store';

const postSelectedSelector = (state: AppState) => state.posts.selected;

const PostDetail: React.FC = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error('Passed invalid id.');
  }

  const postSelected = useSelector(postSelectedSelector);
  const { fetchPost, loading } = useFetchPost();

  useEffect(() => {
    fetchPost(parseInt(id));
  }, [fetchPost, id]);

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
