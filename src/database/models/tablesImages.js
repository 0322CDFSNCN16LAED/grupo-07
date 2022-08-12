const tables = require("./tables");

module.exports = (sequelize, datatypes) => {
  const alias = "TablesImages";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    table_id: datatypes.INTEGER,
    image_id: datatypes.INTEGER,
  };

  const config = {
    tableName: "tables_images", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const TableImage = sequelize.define(alias, cols, config);

  TableImage.associate = function (models) {

    TableImage.belongsTo(models.Table,{
      as: "tables",
      foreignKey: "table_id"
    });
    TableImage.belongsTo(models.Image,{
      as: "images",
      foreignKey: "image_id"
    });
  };
  return TableImage;
};
