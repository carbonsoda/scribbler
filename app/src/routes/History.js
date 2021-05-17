import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import UserImgs from '../components/UserImgs';

export default function History() {
  const [historyTxt, setHistoryTxt] = React.useState('');
  const { isAuthenticated, user } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated) {
      if (!user.email_verified) {
        setHistoryTxt('Please verify your email to start recording your own scribbles.');
      } else {
        setHistoryTxt('Here are the scribbles you\'ve shared in the last 24 hours:');
      }
    } else {
      setHistoryTxt('This page displays the images you\'ve shared in the last 24 hours. Log in or sign up to keep track of your own scribbles.');
    }
  }, [isAuthenticated, user]);

  return (
    <div className="history-page">
      <p>
        { historyTxt }
      </p>
      <UserImgs />
    </div>
  );
}
