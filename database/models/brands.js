module.exports = (sequelize, datatypes) => {
  const alias = "brands";

  const cols = {
    id: datatypes.INTEGER,
    name: datatypes.VARCHAR(30),
  };

  const config = {
    tableName: "Brands",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const brands = sequelize.define(alias, cols, config);

  return brands;
};
