module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    email: {
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  return users;
};