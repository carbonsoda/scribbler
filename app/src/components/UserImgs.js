import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { getImgHistory } from '../apiClient';

import ImgCard from './ImgCard';

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
            fileName={image.img_name}
            cardUrl={image.card_img_url}
            timeCreated={image.time_created}
            shareUrl={image.share_img_url}
            sharedAtTime={image.share_start_time}
            user={user}
          />
        ))
      }
    </div>

  );
}
