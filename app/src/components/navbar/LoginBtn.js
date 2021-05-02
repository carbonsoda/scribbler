import React from 'react';

export default function LoginBtn({ isAuthenticated, loginUser }) {
  const loginClick = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <button className="login-btn" onClick={loginClick}>
      {isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  );
}
