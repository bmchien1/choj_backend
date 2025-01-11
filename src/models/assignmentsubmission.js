"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AssignmentSubmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AssignmentSubmission.belongsTo(models.User, { foreignKey: "user_id" });
      AssignmentSubmission.belongsTo(models.Assignment, {
        foreignKey: "assignment_id",
      });
    }
  }
  AssignmentSubmission.init(
    {
      user_id: DataTypes.INTEGER,
      assignment_id: DataTypes.INTEGER,
      answer: DataTypes.JSON,
      points: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "AssignmentSubmission",
    }
  );
  return AssignmentSubmission;
};
