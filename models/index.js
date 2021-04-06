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
db.genre = require("./genre.js")(sequelize, Sequelize);
db.post = require("./post.js")(sequelize, Sequelize);
db.tagPostGenre = require("./tagPostGenre.js")(sequelize, Sequelize);

db.tutorials.hasMany(db.comments, {as: "comments"});
db.comments.belongsTo(db.tutorials, {foreignKey: "tutorialId", as: "tutorial"});
db.genre.belongsToMany(db.post, {as: 'PostsInGenre', through: db.tagPostGenre, foreignKey: 'genre_id'});
db.post.belongsToMany(db.genre, {as: 'GenresForPost', through: db.tagPostGenre, foreignKey: 'post_id'});
db.tagPostGenre.belongsTo(db.post, {foreignKey: 'post_id', targetKey: 'post_id', as: 'post'});
db.tagPostGenre.belongsTo(db.genre, {foreignKey: 'genre_id', targetKey: 'genre_id', as: 'genre'});

module.exports = db;