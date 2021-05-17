import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import HistoryBtn from './HistoryBtn';
import LoginBtn from './LoginBtn';
import UserIcon from './UserIcon';

export default function LoginItems() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="login-items">
      <HistoryBtn isAuthenticated={isAuthenticated} />
      <LoginBtn />
      <UserIcon user={user} />
    </div>
  );
}
