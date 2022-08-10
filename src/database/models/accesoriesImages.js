module.exports = (sequelize, datatypes) => {
  const alias = "AccesoriesImages";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    url: datatypes.STRING(2038)
  };

  const config = {
    tableName: "accessories_images", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const AccessoryImage = sequelize.define(alias, cols, config);

  return AccessoryImage;
};
