import React from 'react';

export default function DownloadBtn({ localDownload }) {
  const downloadImg = (e) => {
    e.preventDefault();
    // localDownload();
  };

  return (
    <button onClick={downloadImg}>
      Download scribble
    </button>
  );
}
