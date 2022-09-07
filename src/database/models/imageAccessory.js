module.exports = (sequelize, datatypes) => {
    const alias = "ImagesAccessories";
  
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
      tableName: "images_accessories", 
      timestamps: false
    };
  
    const ImageAccessory = sequelize.define(alias, cols, config);

    ImageAccessory.associate = (models) => {
        ImageAccessory.belongsTo(models.Accessories,{
        foreignKey: "accessory_id",
        as: 'accessory'
      });
    }
    return ImageAccessory;
};