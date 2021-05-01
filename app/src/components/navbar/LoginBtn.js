import React from 'react';

export default function LoginBtn({ isLoggedIn, setIsLoggedIn }) {
  const loginClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      // TODO: implement auth0 log-out
      setIsLoggedIn(false);
    } else {
      // TODO: implement auth0 login
      setIsLoggedIn(true);
    }
  };

  return (
    <button className="login-btn" onClick={loginClick}>
      {isLoggedIn ? 'Log out' : 'Log in / Sign Up'}
    </button>
  );
}
