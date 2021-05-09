/* eslint-disable import/extensions */
import express from 'express';
import mime from 'mime-types';

// only works with specifying extension?
import imgHandler from './routers/images.mjs';
import paletteGenerator from './routers/palette.mjs';

const app = express();
const port = process.env.PORT || 4000;

// handles processes relating to images
app.use('/api/upload', imgHandler);

// handles processes relating to color palettes
app.use('/api/colors', paletteGenerator);

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
