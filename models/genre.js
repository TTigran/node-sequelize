module.exports = function(sequelize, DataTypes) {
  const Genre =  sequelize.define('genre', {
    genre_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'genre',
  });

  return Genre;
};