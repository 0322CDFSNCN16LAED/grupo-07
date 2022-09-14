module.exports = (sequelize, datatypes) => {
    const alias = "AccessoriesImages";
  
    const cols = {
      id: {
        type: datatypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true 
      },
      url: datatypes.STRING(2038),
      accessory_id: datatypes.INTEGER(11),
    };
  
    const config = {
      tableName: "accessories_images", 
      timestamps: false
    };
  
    const AccessoryImages = sequelize.define(alias, cols, config);

    AccessoryImages.associate = (models) => {
      AccessoryImages.belongsTo(models.Accessories,{
          foreignKey: "accessory_id",
          as: "accessories_images"
      });
    }
    return AccessoryImages;
};