/* eslint-disable no-unused-vars */
import aws from 'aws-sdk';
import express from 'express';
import { nanoid } from 'nanoid';

// eslint-disable-next-line import/extensions
import { S3_BUCKET } from '../env.dev.mjs';

// handles processes relating to images
const imgHandler = express.Router();
imgHandler.use(express.json());

const filenameGenerator = () => `scribble_${nanoid()}.png`;

// generate a signed s3 url for uploading an object
imgHandler.get('/sign-s3-upload', async (req, res) => {
  const s3 = new aws.S3();

  // TODO: use filenameGenerator once public-urls are enabled
  const fileName = 'golucky.png';
  const fileType = 'image/png';

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 120,
    ContentType: fileType,
  };

  // eslint-disable-next-line consistent-return
  s3.getSignedUrl('putObject', s3Params, (err, url) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: url,
    };

    res.write(JSON.stringify(returnData));
    res.end();
  });
});

export default imgHandler;
