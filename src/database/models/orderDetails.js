module.exports = (sequelize, datatypes) => {
  const alias = "orderDetails";

  const cols = {
    id: datatypes.SMALLINT,
    orderId: datatypes.INTEGER,
    tableId: datatypes.INTEGER,
    tableQuantityt: datatypes.TINYINT,
    accesoryId: datatypes.INTEGER,
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
