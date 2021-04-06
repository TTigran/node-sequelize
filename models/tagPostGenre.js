module.exports = function(sequelize, DataTypes) {
  const TagPostGenre = sequelize.define('tag_post_genre', {
    tag_post_genre_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true
    },
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'post',
        key: 'post_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-genre-per-post'
    },
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'genre',
        key: 'genre_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-genre-per-post'
    },
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'tag_post_genre'
  });

  return TagPostGenre;
};