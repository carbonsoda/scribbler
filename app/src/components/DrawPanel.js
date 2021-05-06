import React from 'react';

import BrushTools from './drawutils/BrushTools';
import CanvasPanel from './drawutils/CanvasPanel';
import ImgUtils from './imgutils/ImgUtils';

export default function DrawPanel() {
  const canvas = React.useRef();

  // states relating to brush tools
  const [brushSize, setBrushSize] = React.useState(10);
  const [brushColor, setBrushColor] = React.useState('rgba(0,0,0,1)');

  return (
    <div className="draw-panel">
      <ImgUtils canvas={canvas} />
      <CanvasPanel canvas={canvas} brushSize={brushSize} brushColor={brushColor} />
      <BrushTools onColorChange={setBrushColor} onSizeChange={setBrushSize} />
    </div>
  );
}
