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
        timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
    }
    const Image = sequelize.define(alias, cols, config);
    Image.associate = function (models) {
      Image.belongsToMany(models.Accessories, {through: models.AccessoriesImages})
      Image.belongsToMany(models.Tables, {through: models.TablesImages})
    }
    return Image;
}