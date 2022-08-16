module.exports = (sequelize, datatypes) => {
  const alias = "UsersImages";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    url: datatypes.STRING(2038)
  };

  const config = {
    tableName: "users_images", /*nombre de la tabla en la base de datos*/
    timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
  };

  const UserImage = sequelize.define(alias, cols, config);
  
  UserImage.associate = (models) => {
    UserImage.belongsTo(models.Users, {
      foreignKey: 'image_id'
    })
  }
  return UserImage;
};
