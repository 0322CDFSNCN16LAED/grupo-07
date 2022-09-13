module.exports = (sequelize, datatypes) => {
    const alias = "Questions";
  
    const cols = {
      id: {
        type: datatypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true 
      },
      fisrt_name: datatypes.STRING(45),
      last_name: datatypes.STRING(45),
      email: datatypes.STRING(50),
      question: datatypes.STRING(500),
    };
  
    const config = {
      tableName: "questions", 
      timestamps: false,
      //createdAt: "created_at",
      //updatedAt: "updated_at",
    };
  
    const Question = sequelize.define(alias, cols, config);

    return Question;
};