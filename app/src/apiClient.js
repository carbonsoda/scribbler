export const uploadImg = async (imgDataURL) => {
  const response = await fetch('/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgDataURL }),
  });

  return response.json();
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
