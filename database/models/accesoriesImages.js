module.exports = (sequelize, datatypes) => {
  const alias = "accesoriesImages";

  const cols = {
    id: datatypes.SMALLINT,
    accesoryId: {
      type: datatypes.INTEGER,
      model: accesories,
      key: "id",
    },
    imageId: {
      type: datatypes.INTEGER,
      model: images,
      key: "id",
    },
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
