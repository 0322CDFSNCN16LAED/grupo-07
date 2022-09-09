module.exports = (sequelize, datatypes) => {
    const alias = "TablesImages";
  
    const cols = {
      id: {
        type: datatypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true 
      },
      url: datatypes.STRING(2038),
      table_id: datatypes.INTEGER(11),
    };
  
    const config = {
      tableName: "tables_images", 
      timestamps: false
    };
  
    const TableImages = sequelize.define(alias, cols, config);

    TableImages.associate = (models) => {

      TableImages.belongsTo(models.Tables,{
        foreignKey: "table_id",
        as: 'tables_images'
      });

    }
    return TableImages;
  };