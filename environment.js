require('dotenv').config();

const environment = {
  database: {
    server: 'mongodb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    db: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  env: (key) => {
    return environment[key];
  },
};

module.exports = environment.env;
