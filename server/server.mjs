import express from 'express';
import got from 'got';
import mime from 'mime-types';

const app = express();
const port = process.env.PORT || 4000;

const images = express.Router();
images.use(express.json());
app.use('/api/upload', images);

images.post('/', async (req, res) => {
  const { imgDataURL } = req.body;

  res.json({ hi: 'there', imgURL: imgDataURL.length });
});

const colors = express.Router();
colors.use(express.json());
app.use('/api/colors', colors);

// generates a color palette from colormind.io
colors.get('/', async (req, res) => {
  const { body } = await got.post('http://colormind.io/api/',
    { json: { model: 'default' }, responseType: 'json' });
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
