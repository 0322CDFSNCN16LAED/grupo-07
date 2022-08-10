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
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const userImage = sequelize.define(alias, cols, config);

  return userImage;
};
