export const uploadImg = async (imgDataURL) => {
  // generate the signed request url
  const signedURL = await fetch('/api/upload/sign-s3-upload').then((out) => out.json());
  // use that signed request to upload to S3
  const uploadUrl = await signedUpload(imgDataURL, signedURL.signedRequest);

  return uploadUrl.json();
};

// helper function for uploadImg
const signedUpload = async (imgDataURL, signedURL) => {
  const data = imgDataURL.replace(/^data:image\/\w+;base64,/, '');
  const buff = Buffer.from(data, 'base64');

  // TODO: configure to return a url
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

// checks if user exists, else create user
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

export const getUserImgHistory = async (user) => {
  // needs to be made more secure, by checking token too?
  const history = await fetch('/api/user/history',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
  return history.json();
};
