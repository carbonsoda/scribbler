import React from 'react';

import DownloadBtn from './imgutils/DownloadBtn';

export default function ImgUtils({ canvas }) {
  const getImg = () => {
    // outputs a dataURL of the png with base64 encoding
    // children[1] = the user's drawing layer, without background
    console.log(canvas.current.canvasContainer.children[1].toDataURL('image/png'));
    // TODO: pass in a callback that takes this dataURL
    // where the img is handled then via sidebar btns
  };

  return (
    <div className="img-utils">
      <button onClick={() => canvas.current.clear()}>Clear</button>
      <button onClick={() => canvas.current.undo()}>Undo</button>
      <button onClick={() => getImg()}>Load</button>
      <DownloadBtn canvas={canvas} />
    </div>
  );
}
