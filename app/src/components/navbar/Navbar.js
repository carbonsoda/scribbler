import React from 'react';

import { Link } from '@reach/router';

import LoginBtn from './LoginBtn';
import UserIcon from './UserIcon';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1><Link to="/">Scribbler</Link></h1>
      <Link to="/history">History</Link>
      <LoginBtn />
      <UserIcon />
    </div>
  );
}
