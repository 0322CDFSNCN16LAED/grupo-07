module.exports = (sequelize, datatypes) => {
  const alias = "orderDetails";

  const cols = {
    id: datatypes.SMALLINT,
    orderId: {
      type: datatypes.INTEGER,
      model: orders,
      key: "id",
    },
    tableId: {
      type: datatypes.INTEGER,
      model: tables,
      key: "id",
    },
    tableQuantityt: datatypes.TINYINT,
    accesoryId: {
      type: datatypes.INTEGER,
      model: accedories,
      key: "id",
    },
    accesoryQuantity: datatypes.TINYINT,
  };

  const config = {
    tableName: "OrderDetails",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const orderDetails = sequelize.define(alias, cols, config);

  return orderDetails;
};
