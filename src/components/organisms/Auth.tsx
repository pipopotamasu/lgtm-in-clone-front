import React, { useEffect } from 'react';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

const Auth: React.FC = ({ children }) => {
  const {
    fetchCurrentUser,
    currentUser,
    loading,
    haveFetched,
  } = useCurrentUser();

  useEffect(() => {
    if (!currentUser && !loading && !haveFetched) {
      fetchCurrentUser();
    }
  }, [fetchCurrentUser, currentUser, loading, haveFetched]);

  if (!haveFetched) {
    return <></>;
  }
  return <>{children}</>;
};

export default Auth;
