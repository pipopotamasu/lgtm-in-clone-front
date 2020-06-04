import React, { lazy, Suspense } from 'react';
import LgtmCardsPlaceholder from 'src/components/atoms/loaders/LgtmCardsPlaceholder';

const LgtmDetail = lazy(() => import('src/components/organisms/LgtmDetail'));

const Random: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<LgtmCardsPlaceholder />}>
        <LgtmDetail />
      </Suspense>
    </div>
  );
};

export default Random;
