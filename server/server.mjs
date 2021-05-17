/* eslint-disable import/extensions */
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mime from 'mime-types';

import { clientOriginUrl } from './env.dev.mjs';
import imgHandler from './routers/images.mjs';
import paletteGenerator from './routers/palette.mjs';
import userRouter from './routers/user.mjs';

const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    reportOnly: true, // TODO: Change to more stringent CSP rules
  },
}));

app.use(cors({ origin: clientOriginUrl }));
const port = process.env.PORT || 4000;

// handles image processes
app.use('/api/image', imgHandler);

// handles processes relating to color palettes
app.use('/api/colors', paletteGenerator);

// handles user processes
app.use('/api/user', userRouter);

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

app.get('*', (req, res) => {
  res.sendFile('/app/index.html');
});

app.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`);
});
