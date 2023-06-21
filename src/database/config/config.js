require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_USERNAME.toString(),
    password: process.env.DEV_PASSWORD.toString(),
    database: process.env.DEV_DB.toString(),
    host: process.env.DEV_HOST.toString(),
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_USERNAME.toString(),
    password: process.env.PROD_PASSWORD.toString(),
    database: process.env.PROD_DB.toString(),
    host: process.env.PROD_HOST.toString(),
    dialect: 'postgres',
  },
};

