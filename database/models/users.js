module.exports = (sequelize, datatypes) => {
  const alias = "users";

  const cols = {
    id: datatypes.INTEGER,
    firstName: datatypes.VARCHAR(25),
    lastName: datatypes.VARCHAR(25),
    email: datatypes.VARCHAR(50),
    password: datatypes.CHAR(64),
    dni: datatypes.SMALLINT,
    imageId: {
      type: datatypes.INTEGER,
      model: imageId,
      key: "id",
    },
    birthdate: DATE,
  };

  const config = {
    tableName: "Accesories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const accesories = sequelize.define(alias, cols, config);

  return accesories;
};
