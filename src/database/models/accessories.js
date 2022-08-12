module.exports = (sequelize, datatypes) => {

  const alias = "Accessories";

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
  };

  const config = {
    tableName: "Accessories", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Accessory = sequelize.define(alias, cols, config);

  Accessory.associate = (models) => {
    
    Accessory.hasOne(models.Brand, {
        as: "brand",
        foreignKey: "brand_id"
    });
    Accessory.belongsToMany(models.Image, {
      as: "images",
      through: models.AccessoryImage,
      foreignKey: "accessory_id",
      otherKey: "image_id"
    });
    Accessory.belongsToMany(models.Order, {
      as: "orders",
      through: models.OrderItems,
      foreignKey: "accessory_id",
      otherKey: "order_id"
    });
  };

  return Accessory;
};
