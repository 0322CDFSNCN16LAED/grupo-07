module.exports = (sequelize, datatypes) => {
  const alias = "Users";

  const cols = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fisrt_name: datatypes.STRING(30),
    last_name: datatypes.STRING(30),
    email: datatypes.STRING(50),
    password: datatypes.CHAR(64),
    dni: datatypes.INTEGER,
    image_id: datatypes.INTEGER,
    birthday: datatypes.DATE,
    address: datatypes.STRING(60),
  };

  const config = {
    tableName: "users" /*nombre de la tabla en la base de datos*/,
    timestamps: false,
    //createdAt: "created_at",
    //updatedAt: "updated_at",
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.hasMany(models.Orders, {
      foreignKey: "user_id",
    });
    User.hasMany(models.UsersAddresses, {
      foreignKey: "user_id",
    });
    User.hasOne(models.UsersImages);
  };

  return User;
};
