export const uploadImg = async (imgDataURL, user) => {
  const { fileName, shareUrl } = await signedImg(imgDataURL);

  if (user) {
    // TODO: check and create user
    // TODO: add user_id + fileName to images db
  }

  return shareUrl.json();
};

// handles signed access requests to AWS S3 bucket
const signedImg = async (imgDataURL) => {
  // generate the signed request url
  const { signedRequest, fileName } = await fetch('/api/image/sign-s3-upload').then((out) => out.json());

  // use that signed request to upload to S3
  const uploadUrl = await signedUpload(imgDataURL, signedRequest);

  // generate signed access-request url
  const { shareUrl } = await fetch('/api/image/sign-s3-share').then((out) => out.json());
  // access the uploaded object
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

// Generates a color palette
export const getColors = async () => {
  const res = await fetch('/api/colors');
  return res.json();
};

export const testPing = async () => {
  const res = await fetch('api/ping');
  return res.json();
};

export const tokenCheck = async (token) => {
  const res = await fetch(
    '/api/user/protected-message',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json();
};

export const createUser = async (user) => {
  await fetch('/api/user/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
};

export const getUserImgHistory = async (userId) => {
  // needs to be made more secure, by checking token too?
  const history = await fetch('/api/user/history',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
  return history.json();
};
