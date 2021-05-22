import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { useStyles, ToolButton } from '../../assets/MUIStyles';

export default function LoginBtn() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const classes = useStyles();

  const loginUser = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <ToolButton
      className={classes.margin}
      onClick={(e) => loginUser(e)}
    >
      {isAuthenticated ? 'Log out' : 'Log in'}
    </ToolButton>
  );
}
