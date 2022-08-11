module.exports = (sequelize, datatypes) => {
  const alias = "Tables";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    type: datatypes.STRING(30),
    description: datatypes.STRING(1024), 
    price: datatypes.DECIMAL(6,2),
    discount: datatypes.DECIMAL(6,2),
    table_length: datatypes.DECIMAL(6,2),
    table_expertise: datatypes.STRING(30),
    table_volume: datatypes.DECIMAL(6,2),
    table_thickness: datatypes.DECIMAL(6,2),
    table_material: datatypes.STRING(30),
    table_keels: datatypes.STRING(30),
    brand_id: datatypes.INTEGER,
  };

  const config = {
    tableName: "tables", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Table = sequelize.define(alias, cols, config);

  Table.associate = (models) => {
    Table.belongsTo(models.Brand, {
      as: "brand",
      foreignKey: "brand_id",
    });
  };

  return Table;
};
