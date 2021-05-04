import React from 'react';

import CanvasDraw from 'react-canvas-draw';
import { RgbaColorPicker } from 'react-colorful';

import BrushTools from './drawpanel/BrushTools';

export default function DrawPanel() {
  const canvas = React.useRef();

  // controls distance/length of the "lazy" pointer
  const lazyRadius = 20;
  // states relating to brush tools
  const [brushSize, setBrushSize] = React.useState(10);
  const [brushColor, setBrushColor] = React.useState('rgba(0,0,0,1)');

  const getImg = () => {
    // outputs a dataURL of the png with base64 encoding
    // children[1] = the user's drawing layer, without background
    console.log(canvas.current.canvasContainer.children[1].toDataURL('image/png'));
    // TODO: pass in a callback that takes this dataURL
    // where the img is handled then via sidebar btns
  };

  const localDownload = () => {
    const drawnlayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    // src: Ehsan Ahmadi https://stackoverflow.com/a/60719585
    const downloadLink = document.createElement('a');
    downloadLink.href = drawnlayer;
    downloadLink.download = 'scribbled-img.png';
    downloadLink.click();
  };

  return (
    <div className="draw-panel">
      <button onClick={() => canvas.current.clear()}>Clear</button>
      <button onClick={() => canvas.current.undo()}>Undo</button>
      <button onClick={() => getImg()}>Load</button>
      <button onClick={() => localDownload()}>Download</button>
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
