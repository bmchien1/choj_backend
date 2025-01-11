"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudyProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudyProgram.belongsTo(models.Course, { foreignKey: "course_id" });
      StudyProgram.hasMany(models.Lesson, { foreignKey: "study_program_id" });
    }
  }
  StudyProgram.init(
    {
      course_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "StudyProgram",
    }
  );
  return StudyProgram;
};
