import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import ImgHistory from '../components/UserImgs';

export default function History() {
  const { isAuthenticated } = useAuth0();

  const historyTxt = 'This page displays the scribbles you\'ve shared in the last 24 hours. Once your shareable link expires after 30 minutes, come here to generate a new one.';

  return (
    <div className="history-page">
      <p className="description">
        { historyTxt }
        { isAuthenticated ? ''
          : (
            <>
              <br />
              {' '}
              <br />
              Sign up or log in to get started!
            </>
          )}
      </p>
      <ImgHistory />
    </div>
  );
}
