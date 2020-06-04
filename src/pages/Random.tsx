import React, { lazy, Suspense } from 'react';
import LgtmDetailPlaceholder from 'src/components/atoms/loaders/LgtmDetailPlaceholder';

const LgtmDetail = lazy(() => import('src/components/organisms/LgtmDetail'));

const Random: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<LgtmDetailPlaceholder />}>
        <LgtmDetail />
      </Suspense>
    </div>
  );
};

export default Random;
