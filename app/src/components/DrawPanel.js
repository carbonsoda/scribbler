import React from 'react';

import CanvasDraw from 'react-canvas-draw';
import { HexColorPicker, HexColorInput } from 'react-colorful';

export default function DrawPanel() {
  const canvas = React.useRef();
  const [color, setColor] = React.useState('#00000080');

  const getImg = () => {
    // outputs a dataURL of the png with base64 encoding
    // children[1] = the user's drawing layer, without background
    console.log(canvas.current.canvasContainer.children[1].toDataURL('image/png'));
  };

  return (
    <div className="draw-panel">
      <button onClick={() => canvas.current.clear()}>Clear</button>
      <button onClick={() => canvas.current.undo()}>Undo</button>
      <button onClick={() => getImg()}>Load</button>
      <CanvasDraw
        ref={canvas}
        brushColor={color}
      />
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} />
    </div>
  );
}
