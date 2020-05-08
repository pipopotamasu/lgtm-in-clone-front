import React from 'react';
import LgtmCards from 'src/components/organisms/LgtmCards';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

const Bookmarks: React.FC = () => {
  const { currentUser } = useCurrentUser();

  if (!currentUser) {
    return <p>Login before access this page.</p>;
  }

  return (
    <div>
      <LgtmCards query={{ bookmarked: true }} />
    </div>
  );
};

export default Bookmarks;
