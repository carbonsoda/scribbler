import React from 'react';

import { Link } from '@reach/router';

import LoginItems from './navbar/LoginItems';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="navbar">
      <h1><Link to="/">Scribbler</Link></h1>
      <Link to="/history">History</Link>
      <LoginItems isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
