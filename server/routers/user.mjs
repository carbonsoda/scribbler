/* eslint-disable import/extensions */
import express from 'express';

import checkJwt from '../check-jwt.mjs';
// import * as db from '../db.mjs';

const userRouter = express.Router();

userRouter.get('/public-message', (req, res) => {
  res.status(200).send({ message: 'The API doesn\'t require an access token to share this message.' });
});

userRouter.get('/protected-message', checkJwt, (req, res) => {
  res.status(200).send({ message: 'The API successfully validated your access token.' });
});

export default userRouter;
