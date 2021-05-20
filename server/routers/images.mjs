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

  const fileName = filenameGenerator();
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
      fileName,
    };

    res.write(JSON.stringify(returnData));
    res.end();
  });
});

// generate a signed s3 url for accessing an object
imgHandler.get('/sign-s3-share', async (req, res) => {
  const { fileName } = req.query;

  const s3 = new aws.S3();

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 1800,
  };

  // eslint-disable-next-line consistent-return
  s3.getSignedUrl('getObject', s3Params, (err, url) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      shareUrl: url,
    };

    res.write(JSON.stringify(returnData));
    res.end();
  });
});

// Will store in database and show on img cards
// TODO: optimize + combine with above
imgHandler.get('/sign-s3-share-user', async (req, res) => {
  const { fileName } = req.query;

  const s3 = new aws.S3();

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 86400,
  };

  const longerUrl = {};

  // eslint-disable-next-line consistent-return
  s3.getSignedUrl('getObject', s3Params, (err, url) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      url24Hr: url,
    };

    res.write(JSON.stringify(returnData));
    res.end();
  });
});

export default imgHandler;
