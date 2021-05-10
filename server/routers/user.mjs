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
  // check if user exists
  const { email } = req.body;
  const user = await db.getUser(email);

  console.log(!user);
  // TODO: if !user then add user

  res.json({ user });
});

export default userRouter;
