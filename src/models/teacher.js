"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teacher.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Teacher.init(
    {
      user_id: DataTypes.INTEGER,
      position: DataTypes.STRING,
      work_place: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Teacher",
    }
  );
  return Teacher;
};
