import React from 'react';

import CanvasDraw from 'react-canvas-draw';

import ImgUtils from './ImgUtils';
import BrushTools from './drawpanel/BrushTools';

export default function DrawPanel() {
  const canvas = React.useRef();

  // controls distance/length of the "lazy" pointer
  const lazyRadius = 20;
  // states relating to brush tools
  const [brushSize, setBrushSize] = React.useState(10);
  const [brushColor, setBrushColor] = React.useState('rgba(0,0,0,1)');

  return (
    <div className="draw-panel">
      <ImgUtils canvas={canvas} />
      <CanvasDraw
        ref={canvas}
        brushColor={brushColor}
        lazyRadius={lazyRadius}
        brushRadius={brushSize}
      />
      <BrushTools onColorChange={setBrushColor} onSizeChange={setBrushSize} />
    </div>
  );
}
