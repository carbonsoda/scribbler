/* eslint-disable no-console */
import React from 'react';

import * as apiClient from '../../apiClient';

export default function ColorPalette() {
  const [colors, setColors] = React.useState([]);

  const generatePalette = async () => {
    // results array of 4 subarrays, each being an rgb-color
    const res = await apiClient.getColors();
    // TODO: make into clickable swatches
    setColors(`rgb(${res.join(') rgb(')})`);
  };

  return (
    <div className="palette-generator">
      <button onClick={generatePalette}>Generate a Color Palette</button>
      {colors}
    </div>
  );
}
