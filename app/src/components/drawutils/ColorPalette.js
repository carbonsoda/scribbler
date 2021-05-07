/* eslint-disable no-console */
import React from 'react';

import * as apiClient from '../../apiClient';

export default function ColorPalette() {
  const [colors, setColors] = React.useState([]);

  const generatePalette = async () => {
    // results array of 4 subarrays, each being an rgb-color
    const res = await apiClient.getColors();
    setColors(res);
  };

  const swatchClick = (e, swatch) => {
    e.preventDefault();
    console.log(swatch);
  };

  return (
    <div className="palette-generator">
      <button onClick={generatePalette}>Generate a Color Palette</button>
      {
        colors
          ? (
            <div className="palette-swatches">
              {
                colors.map((color) => (
                  <button
                    key={color}
                    className="palette-swatch"
                    style={{ background: `rgb(${color})` }}
                    onClick={(e) => swatchClick(e, color)}
                  />
                ))
              }
            </div>
          )
          : ''
      }
    </div>
  );
}

//
// <div className="palette-swatches">
//   {
//     colors.map((color) => (
//       <button
//         key={color}
//         className="palette-swatch"
//         style={{ background: `rgb(${color})` }}
//         onClick={(e) => swatchClick(e, color)}
//       />
//     ))
//   }
// </div>
