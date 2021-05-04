import React from 'react';

import DownloadBtn from './imgutils/DownloadBtn';
import ShareBtn from './imgutils/ShareBtn';

export default function ImgUtils({ canvas }) {
  const uploadImg = () => {
    // children[1] = the user's drawing layer, without background
    const drawnLayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    // TODO: configure apiclient.js and pass drawnLayer to the backend to be handled
    // Should return a url, need to figure how to display it.
    console.log(drawnLayer);
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
