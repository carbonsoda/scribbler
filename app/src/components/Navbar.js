import React from 'react';

import { Link } from '@reach/router';

import LoginItems from './navbar/LoginItems';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1><Link to="/">Scribbler</Link></h1>
      <Link to="/history">History</Link>
      <LoginItems />
    </div>
  );
}
