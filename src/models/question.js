"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.QuestionType, {
        foreignKey: "question_type_id",
      });
      Question.hasOne(models.MultipleChoiceQuestion, {
        foreignKey: "question_id",
      });
      Question.hasOne(models.TrueFalseQuestion, { foreignKey: "question_id" });
      Question.hasOne(models.ShortAnswerQuestion, {
        foreignKey: "question_id",
      });
      Question.hasOne(models.CodingQuestion, { foreignKey: "question_id" });
      Question.hasOne(models.QuestionBank, { foreignKey: "question_id" });
    }
  }
  Question.init(
    {
      question_type_id: DataTypes.INTEGER,
      question: DataTypes.JSON,
      question_image_url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
