/* eslint-disable no-use-before-define */
import dotenv from 'dotenv';
import pgp from 'pg-promise';

const db = initDb();

export const getDemoImages = async (id) => db.any(
  'SELECT img_id, img_name, img_url, time_created'
  + ' FROM images'
  + ' WHERE user_id=($1)',
  [id],
);

export const getUserImages = async (id) => db.any(
  'SELECT img_id, img_name, img_url, time_created'
  + ' FROM images'
  + ' WHERE user_id=($1)'
  + ' AND time_created >= NOW() - INTERVAL \'24 HOURS\'',
  [id],
);

export const addUserImage = async (id, fileName, url) => db.any(
  'INSERT INTO images(user_id, img_name, img_url, time_created)'
  + ' VALUES ($1, $2, $3, $4)'
  + ' RETURNING img_name',
  [id, fileName, url, new Date()],
);

export const createUser = async (user) => db.oneOrNone(
  'INSERT INTO users(username, user_id)'
  + ' VALUES ($1, $2)'
  + ' ON CONFLICT (user_id)'
  + ' DO NOTHING'
  + ' RETURNING user_id',
  [user.nickname, user.sub],
);

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: '../.env' });
    connection = {
      user: 'postgres',
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
