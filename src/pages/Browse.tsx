import React, { lazy, Suspense } from 'react';
import LgtmCardsPlaceholder from 'src/components/atoms/loaders/LgtmCardsPlaceholder';

const LgtmCards = lazy(() => import('src/components/organisms/LgtmCards'));

const Browse: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<LgtmCardsPlaceholder />}>
        <LgtmCards />
      </Suspense>
    </div>
  );
};

export default Browse;
