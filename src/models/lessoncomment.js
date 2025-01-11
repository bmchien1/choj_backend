'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LessonComment.init({
    user_id: DataTypes.INTEGER,
    lesson_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    image_url: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'LessonComment',
  });
  return LessonComment;
};