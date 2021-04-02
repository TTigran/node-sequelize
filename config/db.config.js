module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 100000
  }
};