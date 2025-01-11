"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShortAnswerQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShortAnswerQuestion.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
    }
  }
  ShortAnswerQuestion.init(
    {
      question_id: DataTypes.INTEGER,
      correct_answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ShortAnswerQuestion",
    }
  );
  return ShortAnswerQuestion;
};
