import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import HistoryBtn from './HistoryBtn';
import LoginBtn from './LoginBtn';
import UserIcon from './UserIcon';

export default function LoginItems() {
  const {
    loginWithRedirect, logout, isAuthenticated, user,
  } = useAuth0();

  const loginUser = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="login-items">
      <HistoryBtn isAuthenticated={isAuthenticated} />
      <LoginBtn isAuthenticated={isAuthenticated} loginUser={loginUser} />
      <UserIcon user={user} />
    </div>
  );
}
