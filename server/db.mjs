/* eslint-disable no-use-before-define */
import dotenv from 'dotenv';
import pgp from 'pg-promise';

const db = initDb();

export const getUser = async (user) => db.oneOrNone('SELECT * FROM users'
  + ' WHERE email=($1)', [user.email]);

export const createUser = async (user) => db.one('INSERT INTO users(username, email)'
  + ' VALUES ($1, $2) RETURNING user_id', [user.nickname, user.email]);

export const getUserImages = async (user) => db.any(
  'SELECT img.img_id, img.img_url, img.time_created FROM images AS img'
  + ' RIGHT JOIN users AS us'
  + ' ON us.user_id = img.user_id'
  + ' WHERE us.email = $1',
  [user.email],
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
