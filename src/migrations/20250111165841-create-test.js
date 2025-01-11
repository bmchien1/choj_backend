"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      test_name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      grade: {
        type: Sequelize.STRING,
      },
      creater_id: {
        type: Sequelize.INTEGER,
      },
      student_ids: {
        type: Sequelize.JSON,
      },
      duration: {
        type: Sequelize.TIME,
      },
      start_time: {
        type: Sequelize.DATE,
      },
      end_time: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM("open", "close"),
      },
      permissions: {
        type: Sequelize.ENUM("none", "view_score", "view_details", "appeal"),
      },
      questions_scores: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tests");
  },
};
