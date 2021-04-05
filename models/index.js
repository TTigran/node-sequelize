const config = require('../config').test;
console.log(config)
const Sequelize = require("sequelize");

const {name, username, password, host, database, dialect} = config;

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