"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TrueFalseQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TrueFalseQuestion.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
    }
  }
  TrueFalseQuestion.init(
    {
      question_id: DataTypes.INTEGER,
      statements: DataTypes.JSON,
      correct_answer: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "TrueFalseQuestion",
    }
  );
  return TrueFalseQuestion;
};
