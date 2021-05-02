import React from 'react';

import LoginBtn from './LoginBtn';
import UserIcon from './UserIcon';

export default function LoginItems({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="login-items">
      <LoginBtn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <UserIcon />
    </div>
  );
}
