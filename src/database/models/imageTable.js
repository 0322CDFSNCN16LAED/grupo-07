module.exports = (sequelize, datatypes) => {
    const alias = "ImagesTables";
  
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
      tableName: "images_tables", 
      timestamps: false
    };
  
    const ImageTable = sequelize.define(alias, cols, config);

    ImageTable.associate = (models) => {

        ImageTable.belongsTo(models.Tables,{
        foreignKey: "table_id",
        as: 'images'
      });

    }
    return ImageTable;
  };