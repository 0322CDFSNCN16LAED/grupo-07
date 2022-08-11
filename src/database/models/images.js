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

    return Image;
}