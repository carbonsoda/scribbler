import React from 'react';

export default function ShareBtn({ uploadImg }) {
  const shareImg = (e) => {
    e.preventDefault();
    uploadImg();
  };

  return (
    <button className="share-btn" onClick={shareImg}>
      Share
    </button>
  );
}
