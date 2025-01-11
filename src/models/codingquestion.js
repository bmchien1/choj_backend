"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CodingQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CodingQuestion.belongsTo(models.Question, { foreignKey: "question_id" });
    }
  }
  CodingQuestion.init(
    {
      question_id: DataTypes.INTEGER,
      template_code: DataTypes.TEXT,
      test_cases: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "CodingQuestion",
    }
  );
  return CodingQuestion;
};
