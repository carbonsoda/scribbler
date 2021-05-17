import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { getUserImgHistory } from '../apiClient';

export default function ImgHistory() {
  const [message, setMessage] = React.useState('');

  const { user, isAuthenticated } = useAuth0();

  const getUserImageHistory = async () => {
    let id = 'scribbler|123';
    if (isAuthenticated && user.email_verified) {
      id = user.sub;
    }
    const { history } = await getUserImgHistory(id);
    setMessage(JSON.stringify(history));
  };

  // Not sure if useEffect is the best way to make the images load on page load
  // React.useEffect(() => {
  //   if (user) {
  //     getImages();
  //   }
  // }, [user]);

  return (
    <div className="img-history">
      <button onClick={() => getUserImageHistory()}> Load </button>
      <br />
      {message}
    </div>
  );
}
