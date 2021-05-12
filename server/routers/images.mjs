/* eslint-disable no-unused-vars */
import aws from 'aws-sdk';
import express from 'express';

// eslint-disable-next-line import/extensions
import { S3_BUCKET } from '../env.dev.mjs';

// handles processes relating to images
const imgHandler = express.Router();
imgHandler.use(express.json());

// generate a signed s3 bucket url
imgHandler.get('/sign-s3', async (req, res) => {
  const s3 = new aws.S3();

  // TODO: create file naming generator for s3
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
