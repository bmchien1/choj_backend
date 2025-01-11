"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assignment.belongsTo(models.Course, { foreignKey: "courses_id" });
      Assignment.hasMany(models.AssignmentSubmission, {
        foreignKey: "assignment_id",
      });
    }
  }
  Assignment.init(
    {
      courses_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      type: DataTypes.ENUM("homework", "test", "mock_test", "essay"),
      description: DataTypes.TEXT,
      duration: DataTypes.TIME,
      status: DataTypes.ENUM("private", "public"),
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      questions_scores: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Assignment",
    }
  );
  return Assignment;
};
