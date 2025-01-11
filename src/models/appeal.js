"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appeal.belongsTo(models.Test, { foreignKey: "test_id" });
      Appeal.belongsTo(models.User, { foreignKey: "student_id" });
    }
  }
  Appeal.init(
    {
      test_id: DataTypes.INTEGER,
      student_id: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Appeal",
    }
  );
  return Appeal;
};
