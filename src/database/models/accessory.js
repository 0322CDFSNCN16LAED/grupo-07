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
    price: datatypes.DECIMAL(),
    discount: datatypes.DECIMAL(2, 0),
    brand_id: datatypes.INTEGER,
  };

  const config = {
    tableName: "accessories", /*nombre de la tabla en la base de datos*/
    timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
  };

  const Accessory = sequelize.define(alias, cols, config);

  Accessory.associate = (models) => {
    Accessory.belongsTo(models.Brands, {
      as: "brand",
      foreignKey: "brand_id",
    });
    Accessory.hasMany(models.ImagesAccessories);
    Accessory.belongsToMany(models.Orders, { 
      through: models.OrdersItems
    });
  };

  return Accessory;
};
