import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import LgtmDetailPlaceholder from 'src/components/atoms/loaders/LgtmDetailPlaceholder';

const LgtmDetail = lazy(() => import('src/components/organisms/LgtmDetail'));

const Detail: React.FC = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error('Passed invalid id.');
  }

  return (
    <div>
      <Suspense fallback={<LgtmDetailPlaceholder />}>
        <LgtmDetail id={id} />
      </Suspense>
    </div>
  );
};

export default Detail;
