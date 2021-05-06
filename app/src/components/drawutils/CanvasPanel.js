import React from 'react';

import CanvasDraw from 'react-canvas-draw';

export default function CanvasPanel({ brushSize, brushColor, canvas }) {
  // controls distance/length of the "lazy" pointer
  const lazyRadius = 5;

  return (
    <div className="canvas-draw">
      <CanvasDraw
        ref={canvas}
        brushColor={brushColor}
        lazyRadius={lazyRadius}
        brushRadius={brushSize}
      />
    </div>
  );
}
