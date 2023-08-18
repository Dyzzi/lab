// config.js
const dotenv = require('dotenv');
dotenv.config();

let PORT;
process.env.STATUS === 'production'
    ? (PORT = process.env.PROD_PORT)
    : (PORT = process.env.DEV_PORT);

module.exports = {
  host: process.env.HOST,
  port: PORT,
  secret:process.env.SECRET,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  db: process.env.DB,
  dialect: process.env.DIALECT,
};