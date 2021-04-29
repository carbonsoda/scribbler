import React from 'react';

import LoginBtn from './LoginBtn';
import UserIcon from './UserIcon';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Scribbler</h1>
      <LoginBtn />
      <UserIcon />
    </div>
  );
}
