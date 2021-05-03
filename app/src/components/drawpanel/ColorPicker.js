import React from 'react';

import { HexColorPicker, HexColorInput } from 'react-colorful';

export default function ColorPicker() {
  const [color, setColor] = React.useState('#fabbbb');
  return (
    <>
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} />
    </>
  );
}
