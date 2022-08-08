module.exports = (sequelize, datatypes) => {
  const alias = "accesories";

  const cols = {
    id: datatypes.INTEGER,
    type: datatypes.VARCHAR(30),
    brandId: {
      type: datatypes.INTEGER,
      model: brands,
      key: "id",
    },
    description: datatypes.VARCHAR(1024),
    price: datatypes.DECIMAL(6, 2),
    discount: datatypes.DECIMAL(2, 0),
  };

  const config = {
    tableName: "Accesories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const accesories = sequelize.define(alias, cols, config);

  return accesories;
};
