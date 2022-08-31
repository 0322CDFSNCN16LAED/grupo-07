module.exports = (sequelize, datatypes) => {
    const alias = "Comments";
  
    const cols = {
      id: {
        type: datatypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true 
      },
      comment: datatypes.STRING(1500),
    };
  
    const config = {
      tableName: "comments", 
      timestamps: false,
      //createdAt: "created_at",
      //updatedAt: "updated_at",
    };
  
    const Comment = sequelize.define(alias, cols, config);

    return Comment;
};