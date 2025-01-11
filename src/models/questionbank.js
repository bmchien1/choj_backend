"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionBank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      QuestionBank.belongsTo(models.Question, { foreignKey: "question_id" });
    }
  }
  QuestionBank.init(
    {
      grade: DataTypes.STRING,
      subject: DataTypes.STRING,
      exercise_type: DataTypes.STRING,
      difficulty_level: DataTypes.STRING,
      question_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "QuestionBank",
    }
  );
  return QuestionBank;
};
