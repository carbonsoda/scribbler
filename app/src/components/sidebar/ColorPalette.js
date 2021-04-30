/* eslint-disable no-console */
import React from 'react';

export default function ColorPalette() {
  const [colorsHex, setColorsHex] = React.useState([]);

  const generatePalette = async () => {
    fetch('http://colormind.io/api/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: 'default' }),
    })
      .then((res) => res.json())
      .then((results) => setColorsHex(results))
      .then(() => console.log(colorsHex))
      .catch((e) => console.error(e));
  };

  React.useEffect(() => generatePalette(), [generatePalette]);

  return (
    <div className="palette-generator">
      Daily Color Palette:
      {colorsHex}
    </div>
  );
}
