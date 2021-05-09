import express from 'express';
import mime from 'mime-types';

// requires .js/.mjs but unsure why
// eslint-disable-next-line import/extensions
import paletteRouter from './routers/palette.mjs';

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
app.use('/api/colors', paletteRouter);

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
