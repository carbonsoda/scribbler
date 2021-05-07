/* eslint-disable no-console */
import React from 'react';

import * as apiClient from '../../apiClient';

export default function ColorPalette({ setColor }) {
  const [palette, setPalette] = React.useState([]);

  const generatePalette = async () => {
    // results array of 4 subarrays, each being an rgb-color
    const res = await apiClient.getColors();
    setPalette(res);
  };

  const swatchClick = (e, swatch) => {
    e.preventDefault();
    const swatchObj = {
      r: swatch[0], g: swatch[1], b: swatch[2], a: 1,
    };
    setColor(swatchObj);
  };

  return (
    <div className="palette-generator">
      <button onClick={generatePalette}>
        Generate a Color Palette
      </button>
      {
        palette
          ? (
            <div className="palette-swatches">
              {
                palette.map((color) => (
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
