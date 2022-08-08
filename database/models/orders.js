module.exports = (sequelize, datatypes) => {
  const alias = "orders";

  const cols = {
    id: datatypes.INTEGER,
    userId: {
      type: datatypes.INTEGER,
      model: users,
      key: "id",
    },
    orderDate: datatypes.DATETIME,
    orderStatus: datatypes.VARCHAR(15),
    addressId: {
      type: datatypes.INTEGER,
      model: usersAddress,
      key: "id",
    },
    orderTotal: datatypes.DECIMAL(6, 2),
    paymentMethod: datatypes.VARCHAR(15),
  };

  const config = {
    tableName: "Orders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const orders = sequelize.define(alias, cols, config);

  return orders;
};
