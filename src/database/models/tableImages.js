const tables = require("./table");

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
    timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
  };

  const TableImages = sequelize.define(alias, cols, config);

  TableImages.associate = function (models) {

    TableImages.belongsTo(models.Tables);
    TableImages.belongsTo(models.Images);


    // TableImage.hasMany(models.Table, {
    //   as: "tables",
    //   foreignKey: "table_id",
    // }),
    //   TableImage.hasMany(models.Image, {
    //     as: "images",
    //     foreignKey: "images_id",
    //   });
  };
  return TableImages;
};
