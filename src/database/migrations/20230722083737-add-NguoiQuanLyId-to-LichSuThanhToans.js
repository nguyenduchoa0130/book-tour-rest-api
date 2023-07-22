'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('LichSuThanhToans', 'NguoiQuanLyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'NguoiQuanLies',
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('LichSuThanhToans', 'NguoiQuanLyId');
  },
};
