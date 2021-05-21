/* eslint-disable no-use-before-define */
import dotenv from 'dotenv';
import pgp from 'pg-promise';

const db = initDb();

export const getDemoImages = async (id) => db.any(
  'SELECT img_id, img_name, card_img_url, time_created'
  + ' FROM images'
  + ' WHERE user_id=($1)',
  [id],
);

export const getUserImages = async (id) => db.any(
  'SELECT img_id, img_name, card_img_url, time_created, share_img_url, share_start_time'
  + ' FROM images'
  + ' WHERE user_id=($1)'
  + ' AND time_created >= NOW() - INTERVAL \'24 HOURS\'',
  [id],
);

export const addUserImage = async (id, fileName, shareUrl, url24Hr) => db.any(
  'INSERT INTO images(user_id, img_name, card_img_url, time_created, share_img_url, share_start_time)'
  + ' VALUES ($1, $2, $3, $4, $5, $6)'
  + ' RETURNING img_name',
  [id, fileName, url24Hr, new Date(), shareUrl, new Date()],
);

export const getUserImgUrl = async (id, fileName) => db.one(
  'SELECT share_img_url, share_start_time FROM images'
  + ' WHERE user_id=($1) AND img_name=($2)',
  [id, fileName],
);

export const updateUserImageUrl = async (id, fileName, newUrl) => db.any(
  'UPDATE images'
  + ' SET share_img_url=($1), share_start_time=($2)'
  + ' WHERE user_id=($3) AND img_name=($4)'
  + ' RETURNING share_start_time',
  [newUrl, new Date(), id, fileName],
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
