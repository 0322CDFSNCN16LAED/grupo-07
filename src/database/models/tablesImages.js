module.exports = (sequelize, datatypes) => {
  const alias = "TablesImages";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    url: datatypes.STRING(2038)
  };

  const config = {
    tableName: "tables_images", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const tableImage = sequelize.define(alias, cols, config);

  return tableImage;
};
