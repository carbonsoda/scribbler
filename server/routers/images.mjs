import express from 'express';

// handles processes relating to images
const imgHandler = express.Router();
imgHandler.use(express.json());

imgHandler.post('/', async (req, res) => {
  const { imgDataURL } = req.body;

  res.json({ hi: 'there', imgURL: imgDataURL.length });
});

export default imgHandler;
