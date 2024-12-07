const Sequelize = require('sequelize');

const sequelize = require('../config/db');
const URL = sequelize.define(
  'url',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url_id: {
      type: Sequelize.STRING,
      unique: true,
    },
    url: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
  }
);

module.exports = URL;
