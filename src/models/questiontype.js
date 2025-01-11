"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      QuestionType.hasMany(models.Question, { foreignKey: "question_type_id" });
    }
  }
  QuestionType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "QuestionType",
    }
  );
  return QuestionType;
};
