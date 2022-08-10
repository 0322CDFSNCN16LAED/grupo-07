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
    table_quantityt: datatypes.TINYINT,
    accesory_id: datatypes.INTEGER,
    accesory_quantity: datatypes.TINYINT,
  };

  const config = {
    tableName: "orders_items", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const orderItems = sequelize.define(alias, cols, config);

  orderItems.associate = (models) => {
    
    orderItems.belongsTo(models.Order, {
        as: "order",
        foreignKey: "order_id"
    });

    orderItems.hasMany(models.Tables, {
      as: "table",
      foreignKey: "table_id"
    });

    orderItems.hasMany(models.Accesories, {
      as: "accesory",
      foreignKey: "accesory_id"
    });
  }


  return orderItems;
};
