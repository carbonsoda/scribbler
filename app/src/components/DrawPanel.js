import React from 'react';

import CanvasDraw from 'react-canvas-draw';

import BrushTools from './drawutils/BrushTools';
import ImgUtils from './imgutils/ImgUtils';

export default function DrawPanel() {
  const canvas = React.useRef();

  // controls distance/length of the "lazy" pointer
  const lazyRadius = 5;
  // states relating to brush tools
  const [brushSize, setBrushSize] = React.useState(10);
  const [brushColor, setBrushColor] = React.useState('rgba(0,0,0,1)');

  return (
    <div className="draw-panel">
      <ImgUtils canvas={canvas} />
      <div className="canvas-draw">
        <CanvasDraw
          ref={canvas}
          brushColor={brushColor}
          lazyRadius={lazyRadius}
          brushRadius={brushSize}
        />
      </div>
      <BrushTools onColorChange={setBrushColor} onSizeChange={setBrushSize} />
    </div>
  );
}
