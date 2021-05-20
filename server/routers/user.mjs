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
  const { fileName, user } = req.body;

  // TODO: wrap in try/catch
  // undefined if user already exists
  await db.createUser(user);

  const imgName = await db.addUserImage(user.sub, fileName);

  res.status(201).json({ imgName });
});

userRouter.get('/history', async (req, res) => {
  const { id } = req.params;

  if (id) {
    const history = await db.getUserImages(id);
    res.json({ history });
  }

  const history = await db.getDemoImages(demoid);
  res.json({ history });
});

export default userRouter;
