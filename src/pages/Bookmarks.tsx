import React, { lazy, Suspense } from 'react';
import LgtmCardsPlaceholder from 'src/components/atoms/loaders/LgtmCardsPlaceholder';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

const LgtmCards = lazy(() => import('src/components/organisms/LgtmCards'));

const Bookmarks: React.FC = () => {
  const { currentUser } = useCurrentUser();

  if (!currentUser) {
    return <p>Login before access this page.</p>;
  }

  return (
    <div>
      <Suspense fallback={<LgtmCardsPlaceholder />}>
        <LgtmCards query={{ bookmarked: true }} />
      </Suspense>
    </div>
  );
};

export default Bookmarks;
