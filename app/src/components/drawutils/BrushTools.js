import React from 'react';

import { RgbaColorPicker } from 'react-colorful';

import ColorPalette from './ColorPalette';

export default function BrushTools({ onColorChange, onSizeChange }) {
  const [color, setColor] = React.useState({
    r: 0, b: 0, g: 0, a: 1,
  });
  const [size, setSize] = React.useState(10);

  // change brush color
  React.useEffect(() => {
    onColorChange(`rgb(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
  }, [color, onColorChange]);

  // change brush size
  React.useEffect(() => onSizeChange(size), [size, onSizeChange]);

  return (
    <div className="brush-tools">
      <label htmlFor="brush-size">
        Brush Size
        <br />
        <input
          type="range"
          id="brush-size"
          min="5"
          max="25"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </label>
      <br />
      <RgbaColorPicker color={color} onChange={setColor} />
      <ColorPalette setColor={setColor} />
    </div>
  );
}
