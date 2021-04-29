import React from 'react';

export default function ShareBtn({ beginUpload }) {
  const shareImg = (e) => {
    e.preventDefault();
    // beginUpload();
  };

  return (
    <button className="share-btn" onClick={shareImg}>
      Share scribble
    </button>
  );
}
