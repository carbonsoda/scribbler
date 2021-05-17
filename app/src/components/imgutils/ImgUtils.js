import React from 'react';

import * as apiClient from '../../apiClient';

import DownloadBtn from './DownloadBtn';
import ShareBtn from './ShareBtn';

export default function ImgUtils({ canvas }) {
  const uploadImg = async () => {
    // children[1] = the user's drawing layer, without background
    const drawnLayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    // TODO: check user auth + verification, so can add to history
    // TODO: Can return a url, need to figure how to display it.
    const res = await apiClient.uploadImg(drawnLayer);
    console.log(res);
  };

  return (
    <div className="img-utils">
      <button onClick={() => canvas.current.clear()}>Clear</button>
      <button onClick={() => canvas.current.undo()}>Undo</button>
      <DownloadBtn canvas={canvas} />
      <ShareBtn uploadImg={uploadImg} />
    </div>
  );
}
