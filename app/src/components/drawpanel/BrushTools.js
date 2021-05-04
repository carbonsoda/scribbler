import React from 'react';

import { RgbaColorPicker } from 'react-colorful';

export default function BrushTools({ onChange }) {
  const [color, setColor] = React.useState({
    r: 0, b: 0, g: 0, a: 1,
  });

  // change brush color
  React.useEffect(() => {
    onChange(`rgb(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
  }, [color, onChange]);
  return (
    <div className="brush-tools">
      <RgbaColorPicker color={color} onChange={setColor} />
    </div>
  );
}
