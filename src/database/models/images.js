module.exports = (sequelize, dataTypes) => {
    let alias = "Images";
    let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: dataTypes.STRING(2038),
  };
    let config = {
        tableName: "images",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
    const Image = sequelize.define(alias, cols, config);
    Image.associate = function (models) {
      
      Image.belongsToMany(models.Accessory, {
        as: "accessories",
        through: models.AccessoryImage,
        foreignKey: "image_id",
        otherKey: "accessory_id"
      });

      Image.belongsToMany(models.Table, {
        as: "tables",
        through: models.ImagesTable,
        foreignKey: "image_id",
        otherKey: "table_id"
      })
    };
    return Image;
}