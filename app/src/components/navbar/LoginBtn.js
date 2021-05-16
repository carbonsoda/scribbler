import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

export default function LoginBtn() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const loginUser = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <button className="login-btn" onClick={(e) => loginUser(e)}>
      {isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  );
}
