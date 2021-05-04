import React from 'react';

export default function ImgUtils({ canvas, downloadImg }) {
  const getImg = () => {
    // outputs a dataURL of the png with base64 encoding
    // children[1] = the user's drawing layer, without background
    console.log(canvas.current.canvasContainer.children[1].toDataURL('image/png'));
    // TODO: pass in a callback that takes this dataURL
    // where the img is handled then via sidebar btns
  };

  const localDownload = () => {
    const drawnlayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    // src: Ehsan Ahmadi https://stackoverflow.com/a/60719585
    const downloadLink = document.createElement('a');
    downloadLink.href = drawnlayer;
    downloadLink.download = 'scribbled-img.png';
    downloadLink.click();
  };
  return (
    <div className="img-utils">
      <button onClick={() => canvas.current.clear()}>Clear</button>
      <button onClick={() => canvas.current.undo()}>Undo</button>
      <button onClick={() => getImg()}>Load</button>
      <button onClick={() => localDownload()}>Download</button>
    </div>
  );
}
