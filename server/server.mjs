/* eslint-disable no-unused-expressions */
import express from 'express';
import mime from 'mime-types';

const app = express();
const port = process.env.PORT || 4000;

// By @gsong
process.env?.SERVE_REACT?.toLowerCase() === 'true' &&
  app.use(
    express.static('/app', {
      maxAge: '1d',
      setHeaders: (res, path) =>
        ['application/json', 'text/html'].includes(mime.lookup(path)) &&
        res.setHeader('Cache-Control', 'public, max-age=0'),
    }),
  );

app.get('/api/ping', (req, res) => res.json({ res: 'pong' }));

app.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`);
});
