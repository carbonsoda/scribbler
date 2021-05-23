/* eslint-disable import/extensions */
import express from 'express';

import * as db from '../db.mjs';
import { demoid } from '../env.dev.mjs';

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post('/create', async (req, res) => {
  const { user } = req.body;

  // undefined if user already exists
  const appUser = await db.createUser(user);

  res.status(200).json({ appUser });
});

userRouter.post('/upload', async (req, res) => {
  const { fileName, user, url24Hr } = req.body;

  // TODO: wrap in try/catch
  // undefined if user already exists
  await db.createUser(user);

  const imgName = await db.addUserImage(user.sub, fileName, url24Hr);

  res.status(201).json({ imgName });
});

userRouter.get('/history', async (req, res) => {
  const { id } = req.query;
  let history;

  if (id) {
    history = await db.getUserImages(id);
  } else {
    history = await db.getDemoImages(demoid);
  }

  res.json({ history });
});

export default userRouter;
