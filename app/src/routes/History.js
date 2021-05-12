import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import Loading from '../components/Loading';
import UserImgs from '../components/UserImgs';

export default function History() {
  const {
    isAuthenticated, loginWithRedirect,
  } = useAuth0();

  // Shows Loading component before redirecting
  if (!isAuthenticated) {
    loginWithRedirect();
    return (<Loading />);
  }

  return (
    <div className="history-page">
      This is the history page.
      <UserImgs />
    </div>
  );
}
