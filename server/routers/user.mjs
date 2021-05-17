/* eslint-disable import/extensions */
import express from 'express';

import checkJwt from '../check-jwt.mjs';
import * as db from '../db.mjs';

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.get('/public-message', (req, res) => {
  res.status(200).send({ message: 'The API doesn\'t require an access token to share this message.' });
});

userRouter.get('/protected-message', checkJwt, (req, res) => {
  res.status(200).send({ message: 'The API successfully validated your access token.' });
});

userRouter.post('/create', async (req, res) => {
  const { user } = req.body;

  const newUser = await db.createUser(user);

  res.status(200).json({ newUser });
});

userRouter.post('/history', async (req, res) => {
  const { user } = req.body;
  const history = await db.getUserImages(user.sub);
  res.json({ history });
});

export default userRouter;
