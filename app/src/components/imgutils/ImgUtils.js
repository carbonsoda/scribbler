import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import * as apiClient from '../../apiClient';

import DownloadBtn from './DownloadBtn';
import ShareBtn from './ShareBtn';

export default function ImgUtils({ canvas }) {
  // TODO: stylize url
  const [shareUrl, setShareUrl] = React.useState('');
  const { user } = useAuth0();

  const uploadImg = async () => {
    const drawnLayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    setShareUrl(await apiClient.uploadImg(drawnLayer, user));
  };

  React.useEffect(() => {
    setShareUrl('');
  }, []);

  return (
    <>
      <div className="img-utils">
        <button onClick={() => canvas.current.clear()}>Clear</button>
        <button onClick={() => canvas.current.undo()}>Undo</button>
        <DownloadBtn canvas={canvas} />
        <ShareBtn uploadImg={uploadImg} />
      </div>
      <div className="share-url">
        {shareUrl ? <a href={shareUrl}> Link to Your Scribble </a> : ''}
      </div>
    </>
  );
}
