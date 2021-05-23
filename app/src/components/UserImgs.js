import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { getImgHistory } from '../apiClient';

import ImgCard from './ImgCard';

export default function ImgHistory() {
  const [images, setImages] = React.useState([]);

  const { user, isAuthenticated } = useAuth0();

  const refreshUrl = async (url) => {
    // TODO: configure new signed url
    console.log('Refresh request in process');
  };

  React.useEffect(() => {
    const getUserImgHistory = async () => {
      let id = '';
      if (isAuthenticated && user.email_verified) {
        id = user.sub;
      }
      const { history } = await getImgHistory(id);
      setImages(history);
    };

    getUserImgHistory();
  }, [isAuthenticated, user]);

  return (
    <div className="img-history">
      {
        images.map((image) => (
          <ImgCard
            key={image.img_id}
            name={image.img_name}
            url={image.img_url}
            timeCreated={image.time_created}
            refreshUrl={refreshUrl}
          />
        ))
      }
    </div>

  );
}
