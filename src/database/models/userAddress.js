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
    timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
  };

  const UserAddress = sequelize.define(alias, cols, config);

  UserAddress.associate = (models) => {
    
    UserAddress.belongsTo(models.Users);

    UserAddress.belongsTo(models.Orders);

  };
  return UserAddress;
};
