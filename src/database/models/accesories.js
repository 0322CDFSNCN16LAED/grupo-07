module.exports = (sequelize, datatypes) => {

  const alias = "Accesories";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    type: datatypes.STRING(30),
    description: datatypes.STRING(1024),
    price: datatypes.DECIMAL(6, 2),
    discount: datatypes.DECIMAL(2, 0),
    brand_id: datatypes.INTEGER,
    accessory_image: datatypes.INTEGER
  };

  const config = {
    tableName: "Accesories", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Accesory = sequelize.define(alias, cols, config);

  Accesory.associate = (models) => {
    
    Accesory.belongsTo(models.Brand, {
        as: "brand",
        foreignKey: "brand_id"
    });
    
    Accesory.belongsTo(models.AccessoryImage, {
          as: "image",
          foreignKey: "accessory_image"
      });
  };

  return Accesory;
};
