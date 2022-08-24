module.exports = (sequelize, datatypes) => {
    const alias = "Comments";
  
    const cols = {
      id: {
        type: datatypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true 
      },
      first_name: datatypes.STRING(45), 
      last_name: datatypes.STRING(45),
      email: datatypes.STRING(45),
      telefone: datatypes.INTEGER(20),
      issue: datatypes.STRING(45),
      comment: datatypes.STRING(500)
    };
  
    const config = {
      tableName: "comments", /*nombre de la tabla en la base de datos*/
      timestamps: true,
    };
  
    const Comment = sequelize.define(alias, cols, config);
  
        
    return Comment;
  };
  