"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.User, { foreignKey: "user_id" });
      Course.hasMany(models.StudyProgram, { foreignKey: "course_id" });
      Course.hasMany(models.Student, { foreignKey: "courses_id" });
      Course.hasMany(models.Assignment, { foreignKey: "courses_id" });
    }
  }
  Course.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      class: DataTypes.STRING,
      image_url: DataTypes.STRING,
      subject: DataTypes.STRING,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
