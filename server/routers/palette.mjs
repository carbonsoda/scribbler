import express from 'express';
import got from 'got';
import isReachable from 'is-reachable';

import generateLocalPalette from './paletteBackup.mjs';

const paletteGenerator = express.Router();
paletteGenerator.use(express.json());

const generateColormind = async () => {
  // Colormind has a random assort of color models each day
  // 'default' + 'ui' are always available models
  const colorModels = await got
    .get('http://colormind.io/list/', { responseType: 'json' })
    .then((result) => result.body.result)
    .catch((err) => {
      // '/list' is down for 30 sec daily
      console.error(err);
      return ['ui', 'default'];
    });
  // pick a random model from returned list
  const randomModel = colorModels[Math.floor(Math.random() * colorModels.length)];

  // generates palette
  const { body } = await got.post('http://colormind.io/api/',
    {
      json: { model: randomModel },
      responseType: 'json',
    });

  return body.result;
};

paletteGenerator.get('/', async (req, res) => {
  const colormindReachable = await isReachable('http://colormind.io/');

  if (colormindReachable) {
    const results = await generateColormind();
    res.json(results);
  } else {
    res.json(generateLocalPalette());
  }
});

export default paletteGenerator;
