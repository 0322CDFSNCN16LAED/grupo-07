module.exports = (sequelize, datatypes) => {
  const alias = "tables";

  const cols = {
    id: datatypes.INTEGER,
    type: datatypes.VARCHAR(30),
    brandId: datatypes.INTEGER,
    description: datatypes.VARCHAR(1024),
    price: datatypes.DECIMAL(6, 2),
    discount: datatypes.DECIMAL(2, 0),
    tableLength: datatypes.DECIMAL(3, 2),
    tableVolume: datatypes.DECIMAL(3, 2),
    tableThickness: datatypes.DECIMAL(3, 2),
    tableExpertise: datatypes.VARCHAR(20),
    tableMaterial: datatypes.VARCHAR(20),
    tableKeels: datatypes.VARCHAR(20),
  };

  const config = {
    tableName: "Tables",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const tables = sequelize.define(alias, cols, config);

  return tables;
};
