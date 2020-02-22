import React from 'react';
import LgtmCards from '../components/organisms/LgtmCards';
import useAuth from '../hooks/useAuth';

const Bookmarks: React.FC = () => {
  const { currentUser } = useAuth();

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
