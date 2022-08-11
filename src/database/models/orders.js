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
    Order.belongsTo(models.User);
    Order.hasMany(models.UsersAddresses,{
      foreignKey: "address_id"
    });
    Order.belongsToMany(models.Accessory, {through: models.OrderItems });
    Order.belongsToMany(models.Table, { through: models.OrderItems });
    Order.hasMany(models.OrderItems,
      {foreignKey: 'order_id'})
  };
  return Order;
};