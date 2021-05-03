import React from 'react';

import CanvasDraw from 'react-canvas-draw';

export default function DrawPanel() {
  const canvas = React.useRef();

  const getImg = () => {
    // outputs a dataURL of the png with base64 encoding
    // children[1] = the user's drawing layer, without background
    console.log(canvas.current.canvasContainer.children[1].toDataURL('image/png'));
    // TODO: pass in a callback that takes this dataURL
    // where the img is handled then via sidebar btns
  };

  return (
    <div className="draw-panel">
      <button onClick={() => canvas.current.clear()}>Clear</button>
      <button onClick={() => canvas.current.undo()}>Undo</button>
      <button onClick={() => getImg()}>Load</button>
      <CanvasDraw
        ref={canvas}
        brushColor="rgba(155,12,60,0.7)"
      />
    </div>
  );
}
