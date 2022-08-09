module.exports = (sequelize, datatypes) => {
  const alias = "images";

  const cols = {
    id: datatypes.INTEGER,
    url: datatypes.VARCHAR(2083),
  };

  const config = {
    tableName: "Images",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const images = sequelize.define(alias, cols, config);

  return images;
};
