module.exports = (sequelize, datatypes) => {
  const alias = "UsersAddresses";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    address: datatypes.STRING(100),
    zip_code: datatypes.STRING(8),
    user_id: datatypes.INTEGER(11),
    country: datatypes.STRING(45)
  };

  const config = {
    tableName: "users_addresses", /*nombre de la tabla en la base de datos*/
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const UsersAddress = sequelize.define(alias, cols, config);

  UsersAddress.associate = (models) => {
    
    UsersAddress.belongsTo(models.UserImage, {
        as: "user",
        foreignKey: "user_id"
    });
  };
  return UsersAddress;
};
