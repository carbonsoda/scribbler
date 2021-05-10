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
  let status = 400;
  let message = 'Error with finding or creating user';

  const userExists = await db.getUser(user);

  if (!userExists) {
    const newUser = await db.createUser(user);
    if (newUser) {
      status = 201;
      message = `User ${user.nickname} successfully created.`;
    }
  } else {
    status = 200;
    message = `User ${user.nickname} successfully found.`;
  }

  res.status(status).send({ message });
});

export default userRouter;
