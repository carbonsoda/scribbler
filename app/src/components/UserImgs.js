import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { getImgHistory } from '../apiClient';

export default function ImgHistory() {
  const [images, setImages] = React.useState([]);

  const { user, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    const getUserImgHistory = async () => {
      let id = '';
      if (isAuthenticated && user.email_verified) {
        id = user.sub;
      }
      const { history } = await getImgHistory(id);
      setImages(JSON.stringify(history));
    };

    getUserImgHistory();
  }, [isAuthenticated, user]);

  return (
    <div className="img-history">
      { images }
    </div>
  );
}
