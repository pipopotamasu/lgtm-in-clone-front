import React from 'react';
import { useParams } from "react-router-dom";
import LgtmDetail from '../components/organisms/LgtmDetail';

const PostDetail: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error('Passed invalid id.');
  }

  return (
    <div>
      <LgtmDetail id={parseInt(id)} />
    </div>
  );
};

export default PostDetail;
