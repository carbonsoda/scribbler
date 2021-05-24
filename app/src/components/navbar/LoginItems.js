import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import { useStyles, ToolButton } from '../../assets/MUIStyles';

import LoginBtn from './LoginBtn';
import UserIcon from './UserIcon';

export default function LoginItems() {
  const { user } = useAuth0();
  const classes = useStyles();

  return (
    <div className="login-items">
      <Link
        to="/history"
        className={classes.link}
      >
        <ToolButton className={classes.margin}>
          View History
        </ToolButton>
      </Link>
      <LoginBtn />
      <UserIcon user={user} />
    </div>
  );
}
