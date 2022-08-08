module.exports = (sequelize, datatypes) => {
  const alias = "tablesImages";

  const cols = {
    id: datatypes.INTEGER,
    tableId: {
      type: datatypes.INTEGER,
      model: tables,
      key: "id",
    },
    imageId: {
      type: datatypes.INTEGER,
      model: images,
      key: "id",
    },
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
