module.exports = (sequelize, datatypes) => {
  const alias = "userImages";

  const cols = {
    id: datatypes.INTEGER,
    url: datatypes.VARCHAR(2083),
  };

  const config = {
    tableName: "UserImages",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const userImages = sequelize.define(alias, cols, config);

  return userImages;
};
