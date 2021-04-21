const config = require('../config').test;
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

db.products = require("./products.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);

db.users.hasOne(db.products, );
db.products.belongsTo(db.users, );

module.exports = db;