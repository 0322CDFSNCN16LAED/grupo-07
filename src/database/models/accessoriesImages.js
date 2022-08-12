module.exports = (sequelize, datatypes) => {
  const alias = "AccessoriesImages";

  const cols = {
  id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
  accessory_id: datatypes.INTEGER,
  image_id:  datatypes.INTEGER,
  };

  const config = {
  tableName: "accessories_images", /*nombre de la tabla en la base de datos*/
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  };

  const AccessoryImage = sequelize.define(alias, cols, config);

  AccessoryImage.associate = function (models) {
  AccessoryImage.belongsTo(models.Accessory,{
    as: "accessories",
    foreignKey: "accessories_id"
  })
  AccessoryImage.belongsTo(models.Image,{
    as: "images",
    foreignKey: "images_id"
  })
}

return AccessoryImage;
};
