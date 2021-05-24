// Generates a color palette
export const getColors = async () => {
  const res = await fetch('/api/colors');
  return res.json();
};

// Directs all images processes and return shareable url
export const uploadImg = async (imgDataURL, user) => {
  const { fileName, shareUrl } = await signedImg(imgDataURL);

  if (user) {
    addUserImg(fileName, user, shareUrl);
  }

  return shareUrl;
};

// handles signed access requests to AWS S3 bucket
const signedImg = async (imgDataURL) => {
  // generate the signed request url
  const { signedRequest, fileName } = await fetch('/api/image/sign-s3-upload').then((out) => out.json());

  // use that signed request to upload to S3
  await signedUpload(imgDataURL, signedRequest);

  // generate signed access-request url
  const { shareUrl } = await fetch(`/api/image/sign-s3-share?fileName=${fileName}`).then((out) => out.json());

  return ({ fileName, shareUrl });
};

// helper function for signedImg
const signedUpload = async (imgDataURL, signedURL) => {
  const data = imgDataURL.replace(/^data:image\/\w+;base64,/, '');
  const buff = Buffer.from(data, 'base64');

  const result = await fetch(signedURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'image/png',
    },
    body: buff,
  });

  return result;
};

// Add user's new image to their image_history record
const addUserImg = async (fileName, user, shareUrl) => {
  const { url24Hr } = await fetch(`/api/image/sign-s3-share-user?fileName=${fileName}`)
    .then((out) => out.json());

  const imgName = await fetch('/api/user/upload',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName, user, shareUrl, url24Hr,
      }),
    });
};

export const getImgHistory = async (userId) => {
  const history = await fetch(`/api/user/history?id=${userId}`);
  return history.json();
};

export const renewShareUrl = async (userId, fileName) => {
  const { imgUrl, startTime } = await fetch(`/api/user/share-url?fileName=${fileName}&id=${userId}`).then((out) => out.json());

  if (shareTimeExpired(startTime)) {
    // generate a new one, and replace it in the db
    const { shareUrl } = await fetch(`/api/image/sign-s3-share?fileName=${fileName}`)
      .then((out) => out.json());

    //  replace it in the db
    const { newStartTime } = await fetch('/api/user/share-url',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName, userId, shareUrl,
        }),
      });

    return { url: shareUrl, time: newStartTime };
  }

  return { url: imgUrl, time: startTime };
};

const shareTimeExpired = (dbTime) => {
  const current = new Date();
  const old = new Date(dbTime);
  const diff = (current.getTime() - old.getTime()) / 1000 / 60;

  return Math.abs(Math.round(diff)) >= 30;
};
