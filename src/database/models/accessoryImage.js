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
  timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
};

const AccessoryImage = sequelize.define(alias, cols, config);

AccessoryImage.associate = function (models) {

  AccessoryImage.belongsTo(models.Accessories);
  
  AccessoryImage.belongsTo(models.Images);
  // AccessoryImage.hasMany(models.Accessory, {
  //   as: "accessory",
  //   foreignKey: "accessory_id"
  // }),
  // AccessoryImage.hasMany(models.Image, {
  //   as: "image",
  //   foreignKey: "image_id"
  // })
}

return AccessoryImage;
};
