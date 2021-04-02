const config = require('../config').db.test;
const Sequelize = require("sequelize");

const {name, username, password, host, database, dialect} = config.database;

const sequelize = new Sequelize(name, username, password, {
  host,
  dialect,
  database,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.js")(sequelize, Sequelize);

module.exports = db;