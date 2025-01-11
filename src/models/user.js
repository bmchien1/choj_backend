"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: "role_id" });
      User.hasMany(models.Teacher, { foreignKey: "user_id" });
      User.hasMany(models.Course, { foreignKey: "user_id" });
      User.hasMany(models.Student, { foreignKey: "user_id" });
      User.hasMany(models.AssignmentSubmission, { foreignKey: "user_id" });
      User.hasMany(models.Test, { foreignKey: "creater_id" });
      User.hasMany(models.TestSubmission, { foreignKey: "student_id" });
      User.hasMany(models.Appeal, { foreignKey: "student_id" });
      User.hasMany(models.LessonComment, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      uuid: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      description: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.JSON,
      dob: DataTypes.DATE,
      avatar_url: DataTypes.STRING,
      access_token: DataTypes.TEXT,
      refresh_token: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
