module.exports = (sequelize, datatypes) => {
  const alias = "Brands";

  const cols = {
    id: {
      type: datatypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true 
    },
    name: datatypes.STRING(30),
  };

  const config = {
    tableName: "brands", 
    timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
  };

  const Brand = sequelize.define(alias, cols, config);
  Brand.associate = (models) => {
    Brand.hasMany(models.Accessories,{
      foreignKey: 'id',
      as: 'accessories'
    });
    Brand.hasMany(models.Tables,{
      foreignKey: "id",
      as: 'tables'
    });
  }
  return Brand;
};