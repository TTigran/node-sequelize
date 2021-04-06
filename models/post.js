module.exports = function(sequelize, DataTypes) {
  const Post =  sequelize.define('post', {
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'post',
  });

  return Post;
}