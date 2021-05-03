import React from 'react';

import CanvasDraw from 'react-canvas-draw';

export default function DrawPanel() {
  return (
    <div className="draw-panel">
      <CanvasDraw
        ref={activeCanvas}
        brushColor="rgba(155,12,60,0.7)"
      />
    </div>
  );
}
