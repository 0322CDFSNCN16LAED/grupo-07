module.exports = (sequelize, datatypes) => {
  const alias = "accesoriesImages";

  const cols = {
    id: datatypes.SMALLINT,
    accesoryId: datatypes.INTEGER,
    imageId: datatypes.INTEGER,
  };

  const config = {
    tableName: "AccesoriesImages",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const accesoriesImages = sequelize.define(alias, cols, config);

  return accesoriesImages;
};
