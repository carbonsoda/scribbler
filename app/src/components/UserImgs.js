import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { imgHistory } from '../apiClient';

export default function UserImgs() {
  const [message, setMessage] = React.useState('');

  const {
    isAuthenticated, loginWithRedirect, user, getAccessTokenSilently,
  } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await imgHistory(token);

      setMessage(res.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  React.useEffect(() => {
    callSecureApi();
  }, []);

  return (
    <div className="img-history">
      Your shared image history goes here.
      <br />
      {message}
    </div>
  );
}
