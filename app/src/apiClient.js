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

export const testPing = async () => {
  const res = await fetch('api/ping');
  return res.json();
};
