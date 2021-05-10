import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { createUser } from '../../apiClient';

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
      // TODO: as part of login process, check if new user
      // ie Auth0 ManagementConsole can show login count with email
    }
  };

  if (user) {
    // TODO: remove after above's TODO
    createUser(user);
  }

  return (
    <div className="login-items">
      <HistoryBtn isAuthenticated={isAuthenticated} />
      <LoginBtn isAuthenticated={isAuthenticated} loginUser={loginUser} />
      <UserIcon user={user} />
    </div>
  );
}
