import express from 'express';
import got from 'got';

const paletteRouter = express.Router();
paletteRouter.use(express.json());

paletteRouter.get('/', async (req, res) => {
  // Colormind has a random assort of color models each day
  const colorModels = await got
    .get('http://colormind.io/list/', { responseType: 'json' })
    .then((result) => result.body.result);
  const randomModel = colorModels[Math.floor(Math.random() * colorModels.length)];

  const { body } = await got.post('http://colormind.io/api/',
    {
      json: { model: randomModel },
      responseType: 'json',
    });
  res.json(body.result);
});

export default paletteRouter;
