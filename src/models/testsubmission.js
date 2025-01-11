"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TestSubmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TestSubmission.belongsTo(models.User, { foreignKey: "student_id" });
      TestSubmission.belongsTo(models.Test, { foreignKey: "test_id" });
    }
  }
  TestSubmission.init(
    {
      student_id: DataTypes.INTEGER,
      test_id: DataTypes.INTEGER,
      answer: DataTypes.JSON,
      points: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "TestSubmission",
    }
  );
  return TestSubmission;
};
