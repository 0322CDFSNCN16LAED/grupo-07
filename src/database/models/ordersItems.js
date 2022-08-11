module.exports = (sequelize, datatypes) => {
  const alias = "ordersItems";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    order_id: datatypes.INTEGER,
    table_id: datatypes.INTEGER,
    table_quantity: datatypes.TINYINT,
    accessory_id: datatypes.INTEGER,
    accessory_quantity: datatypes.TINYINT,
    price: datatypes.DECIMAL(3,2)
  };

  const config = {
    tableName: "orders_items", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const OrderItems = sequelize.define(alias, cols, config);

  OrderItems.associate = (models) => {
    
    OrderItems.belongsTo(models.Order, {
        as: "order",
        foreignKey: "order_id"
    });

    OrderItems.hasMany(models.Tables, {
      as: "table",
      foreignKey: "table_id"
    });

    OrderItems.hasMany(models.Accessories, {
      as: "accessory",
      foreignKey: "accessory_id"
    });
  }
  return OrderItems;
};
