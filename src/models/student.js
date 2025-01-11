"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.User, { foreignKey: "user_id" });
      Student.belongsTo(models.Course, { foreignKey: "courses_id" });
    }
  }
  Student.init(
    {
      courses_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      status: DataTypes.ENUM("pending", "approved", "audited"),
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
