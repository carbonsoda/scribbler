import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { getUserImgHistory } from '../apiClient';

export default function UserImgs() {
  const [message, setMessage] = React.useState('');

  const { user } = useAuth0();

  const getUserImageHistory = async () => {
    const imgs = await getUserImgHistory(user)
      .catch((e) => console.error(e));
    console.log(imgs.history);
  };

  // Not sure if useEffect is the best way to make the images load on page load
  // React.useEffect(() => {
  //   if (user) {
  //     getImages();
  //   }
  // }, [user]);

  return (
    <div className="img-history">
      Your shared image history goes here.
      <button onClick={() => getUserImageHistory()}> Load </button>
      <br />
      {message}
    </div>
  );
}
