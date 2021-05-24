import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Alert } from '@material-ui/lab';

import { useStyles } from '../assets/MUIStyles';

export default function VerifyEmail() {
  const [unverified, setUnverified] = React.useState(false);
  const { user } = useAuth0();
  const classes = useStyles();

  React.useEffect(() => {
    if (user && !user.email_verified) {
      setUnverified(true);
    } else {
      setUnverified(false);
    }
  }, [user]);
  return (
    <>
      {
        unverified ? (
          <Alert
            severity="info"
            variant="filled"
            className={classes.banner}
          >
            Verify your email to keep track of your shared scribbles
          </Alert>
        )
          : ''
      }

    </>
  );
}
