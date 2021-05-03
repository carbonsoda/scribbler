import React from 'react';

import CanvasDraw from 'react-canvas-draw';

export default function DrawPanel() {
  const canvas = React.useRef();

  return (
    <div className="draw-panel">
      <CanvasDraw
        ref={canvas}
        brushColor="rgba(155,12,60,0.7)"
      />
    </div>
  );
}
