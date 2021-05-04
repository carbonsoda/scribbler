import React from 'react';

import CanvasDraw from 'react-canvas-draw';
import { RgbaColorPicker } from 'react-colorful';

import BrushTools from './drawpanel/BrushTools';

export default function DrawPanel() {
  const canvas = React.useRef();
  const lazyRadius = 20;
  const [brushSize, setBrushSize] = React.useState(10);
  const [brushColor, setBrushColor] = React.useState('rgba(0,0,0,1)');

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
        brushColor={brushColor}
        lazyRadius={lazyRadius}
        brushRadius={brushSize}
      />
      <BrushTools onChange={setBrushColor} />
    </div>
  );
}
