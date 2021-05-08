import express from 'express';
import got from 'got';
import mime from 'mime-types';

const app = express();
const port = process.env.PORT || 4000;

// handles processes relating to images
const imgHandler = express.Router();
imgHandler.use(express.json());
app.use('/api/upload', imgHandler);

imgHandler.post('/', async (req, res) => {
  const { imgDataURL } = req.body;

  res.json({ hi: 'there', imgURL: imgDataURL.length });
});

// handles processes relating to color palettes
const colors = express.Router();
colors.use(express.json());
// TODO: move this router as its own file + importing it
app.use('/api/colors', colors);

// generates a color palette from colormind.io
colors.get('/', async (req, res) => {
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

// By @gsong
// eslint-disable-next-line no-unused-expressions
process.env?.SERVE_REACT?.toLowerCase() === 'true'
  && app.use(
    express.static('/app', {
      maxAge: '1d',
      setHeaders: (res, path) => ['application/json', 'text/html'].includes(mime.lookup(path))
        && res.setHeader('Cache-Control', 'public, max-age=0'),
    }),
  );

app.get('/api/ping', (req, res) => res.json({ res: 'pong' }));

app.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`);
});
