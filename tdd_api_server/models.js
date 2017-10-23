const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  operatorsAliases: false
});

const User = sequelize.define('User', {
  name: Sequelize.STRING
});

module.exports = {Sequelize, sequelize, User};