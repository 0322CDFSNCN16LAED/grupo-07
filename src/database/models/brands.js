module.exports = (sequelize, datatypes) => {
  const alias = "Brands";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    name: datatypes.STRING(30),
  };

  const config = {
    tableName: "brands", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Brand = sequelize.define(alias, cols, config);
  Brand.associate = (models) => {
    Brand.belongsTo(models.Accessory);
    Brand.belongsTo(models.Table);
  }
  return Brand;
};
