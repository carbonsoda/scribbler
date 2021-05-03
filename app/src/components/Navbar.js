import React from 'react';

import { Link } from '@reach/router';

import LoginItems from './navbar/LoginItems';

export default function Navbar() {
  return (
    <nav>
      <h1><Link to="/">Scribbler</Link></h1>
      <LoginItems />
    </nav>
  );
}
