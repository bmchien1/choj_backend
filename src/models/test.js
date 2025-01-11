"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Test.belongsTo(models.User, { foreignKey: "creater_id" });
      Test.hasMany(models.TestSubmission, { foreignKey: "test_id" });
      Test.hasMany(models.Appeal, { foreignKey: "test_id" });
    }
  }
  Test.init(
    {
      test_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      grade: DataTypes.STRING,
      creater_id: DataTypes.INTEGER,
      student_ids: DataTypes.JSON,
      duration: DataTypes.TIME,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      status: DataTypes.ENUM("open", "close"),
      permissions: DataTypes.ENUM(
        "none",
        "view_score",
        "view_details",
        "appeal"
      ),
      questions_scores: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Test",
    }
  );
  return Test;
};
