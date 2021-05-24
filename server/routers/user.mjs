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
  const {
    fileName, user, shareUrl, url24Hr,
  } = req.body;

  // undefined if user already exists
  await db.createUser(user);

  const imgName = await db.addUserImage(user.sub, fileName, shareUrl, url24Hr);

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

userRouter.get('/share-url', async (req, res) => {
  const { id, fileName } = req.query;

  // eslint-disable-next-line camelcase
  const { share_img_url, share_start_time } = await db.getUserImgUrl(id, fileName);

  res.json({ imgUrl: share_img_url, startTime: share_start_time });
});

userRouter.post('/share-url', async (req, res) => {
  const { shareUrl, userId, fileName } = req.body;

  // eslint-disable-next-line camelcase
  const newStartTime = await db.updateUserImageUrl(userId, fileName, shareUrl);

  res.json(newStartTime);
});

export default userRouter;
