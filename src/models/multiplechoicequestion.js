"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MultipleChoiceQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MultipleChoiceQuestion.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
    }
  }
  MultipleChoiceQuestion.init(
    {
      question_id: DataTypes.INTEGER,
      choices: DataTypes.JSON,
      correct_answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MultipleChoiceQuestion",
    }
  );
  return MultipleChoiceQuestion;
};
