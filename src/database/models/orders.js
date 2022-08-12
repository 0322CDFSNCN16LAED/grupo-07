module.exports = (sequelize, datatypes) => {
  const alias = "Orders";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    user_id: datatypes.INTEGER,
    order_date: datatypes.DATE,
    order_status: datatypes.STRING(15),
    address_id: datatypes.INTEGER,
    order_total: datatypes.DECIMAL(6, 2),
    payment_method: datatypes.STRING(15),
  };

  const config = {
    tableName: "orders", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Order = sequelize.define(alias, cols, config);

  Order.associate = (models) => {
    Order.belongsTo(models.User,{
      as: "users",
      foreignKey: "user_id"
    });
    Order.hasMany(models.UsersAddress,{
      as: "addresses",
      foreignKey: "address_id"
    });
    Order.belongsToMany(models.Accessory, {
      as: "accessories",
      through: models.OrderItems,
      foreignKey: "order_id",
      otherKey: "accessory_id"
    });
    Order.belongsToMany(models.Table, { 
      as: "tables",
      through: models.OrderItems,
      foreignKey: "order_id",
      otherKey: "table_id"
    });
    Order.hasMany(models.OrderItems,{ 
      as: "orders_items",
      foreignKey: "order_id"
    })
  };
  return Order;
};