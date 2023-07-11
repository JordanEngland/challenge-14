// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'your-database-name',
  username: 'your-username',
  password: 'your-password',
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
