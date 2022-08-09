module.exports = (sequelize, datatypes) => {
  const alias = "tablesImages";

  const cols = {
    id: datatypes.INTEGER,
    tableId: datatypes.INTEGER,
    imageId: datatypes.INTEGER,
  };

  const config = {
    tableName: "TablesImages",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const tablesImages = sequelize.define(alias, cols, config);

  return tablesImages;
};
