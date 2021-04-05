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

db.tutorials = require("./tutorial.js")(sequelize, Sequelize);
db.comments = require("./comment.js")(sequelize, Sequelize);

db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

module.exports = db;