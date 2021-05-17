import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

export default function VerifyEmail() {
  const [verifyMsg, setVerifyMsg] = React.useState('');
  const { user } = useAuth0();

  React.useEffect(() => {
    if (user && !user.email_verified) {
      setVerifyMsg('Please check your email to verify your account');
    } else {
      setVerifyMsg('');
    }
  }, [user]);
  return (
    <div className="verify-email">
      { verifyMsg }
    </div>
  );
}
