import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import { createUser } from '../apiClient';

import LoginItems from './navbar/LoginItems';

export default function Navbar() {
  const [verifyMsg, setVerifyMsg] = React.useState('');
  const { user } = useAuth0();

  // Requires user to refresh page once verified
  React.useEffect(() => {
    if (user) {
      if (user.email_verified) {
        // checks if user exists, else create it in db
        createUser(user);
        setVerifyMsg('');
      } else {
        setVerifyMsg('Please check your email to verify your account');
      }
    }
  }, [user]);

  return (
    <>
      <nav>
        <h1><Link to="/">Scribbler</Link></h1>
        <LoginItems />
      </nav>
      {verifyMsg}
    </>
  );
}
