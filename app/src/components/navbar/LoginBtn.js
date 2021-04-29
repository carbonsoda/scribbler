import React from 'react';

export default function LoginBtn({ loginState, authLink }) {
  const loginClick = (e) => {
    e.preventDefault();
    // authLink();
  };

  return (
    <button className="login-btn" onClick={loginClick}>
      {loginState ? 'Log out' : 'Log in / Sign Up'}
    </button>
  );
}
