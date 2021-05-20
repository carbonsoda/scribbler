// Generates a color palette
export const getColors = async () => {
  const res = await fetch('/api/colors');
  return res.json();
};

export const uploadImg = async (imgDataURL, user) => {
  const { fileName, shareUrl } = await signedImg(imgDataURL);

  if (user) {
    await addUserImg(fileName, user);
  }

  return shareUrl;
};

// handles signed access requests to AWS S3 bucket
const signedImg = async (imgDataURL) => {
  // generate the signed request url
  const { signedRequest, fileName } = await fetch('/api/image/sign-s3-upload').then((out) => out.json());

  // use that signed request to upload to S3
  const uploadUrl = await signedUpload(imgDataURL, signedRequest);

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
const addUserImg = async (fileName, user) => {
  const { url24Hr } = await fetch(`/api/image/sign-s3-share-user?fileName=${fileName}`)
    .then((out) => out.json());

  const imgName = await fetch('/api/user/upload',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileName, user, url24Hr }),
    });
};

export const getImgHistory = async (userId) => {
  // TODO: needs to be made more secure, via token check?
  const history = await fetch(`/api/user/history?id=${userId}`);
  return history.json();
};
