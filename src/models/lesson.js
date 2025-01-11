"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lesson.belongsTo(models.StudyProgram, { foreignKey: "study_program_id" });
      Lesson.hasMany(models.LessonComment, { foreignKey: "lesson_id" });
    }
  }
  Lesson.init(
    {
      study_program_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      file_url: DataTypes.STRING,
      status: DataTypes.ENUM("private", "public"),
    },
    {
      sequelize,
      modelName: "Lesson",
    }
  );
  return Lesson;
};
