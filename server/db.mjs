/* eslint-disable no-use-before-define */
import dotenv from 'dotenv';
import pgp from 'pg-promise';

const db = initDb();

export const getAllUsers = async () => db.any('SELECT * FROM users');
export const getAllImages = async () => db.any('SELECT * FROM images');

export const getUser = async (email) => db.oneOrNone('SELECT * FROM users'
  + ' WHERE email=($1)', [email]);

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
