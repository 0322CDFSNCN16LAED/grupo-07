module.exports = (sequelize, datatypes) => {
  const alias = "usersAddress";

  const cols = {
    id: datatypes.INTEGER,
    userId: {
      type: datatypes.INTEGER,
      model: users,
      key: "id",
    },
    addressStreet: datatypes.VARCHAR(25),
    addressCity: datatypes.VARCHAR(25),
    addressState: datatypes.VARCHAR(25),
    addressCountry: datatypes.VARCHAR(50),
    addressZipCode: datatypes.VARCHAR(8),
  };

  const config = {
    tableName: "UsersAddress",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const usersAddress = sequelize.define(alias, cols, config);

  return usersAddress;
};
