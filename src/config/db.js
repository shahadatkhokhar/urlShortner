const { Sequelize, DataTypes } = require('sequelize');
const env = require('../../environment');

const dbName = env('database').db;
const dialect = env('database').dialect;
const username = env('database').username;
const password = env('database').password;
const host = env('database').host;
const pool = env('database').pool;
// const port = env('database').port;

const sequelize = new Sequelize(dbName, username, password, {
  host,
  dialect,
  define: {
    timestamps: false,
  },
});

const syncDbAndAuthenticate = async () => {
  try {
    // dont manipulate this statement below
    await sequelize.sync({ force: false, alter: { drop: false } });
  } catch (error) {
    throw error;
  }
};

syncDbAndAuthenticate();

sequelize
  .authenticate()
  .then((result) => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;
