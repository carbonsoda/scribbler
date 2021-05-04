import React from 'react';

export default function DownloadBtn({ canvas }) {
  const startDownload = (e) => {
    e.preventDefault();

    const drawnlayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    // src: Ehsan Ahmadi https://stackoverflow.com/a/60719585
    const downloadLink = document.createElement('a');
    downloadLink.href = drawnlayer;
    downloadLink.download = 'scribbled-img.png';
    downloadLink.click();
  };

  return (
    <button onClick={startDownload}>
      Download
    </button>
  );
}
