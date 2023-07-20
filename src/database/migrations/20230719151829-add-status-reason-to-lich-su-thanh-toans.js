'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('LichSuThanhToans', 'TrangThai', {
        type: Sequelize.STRING,
        defaultValue: 'Chờ Xác Nhận',
      }),
      queryInterface.addColumn('LichSuThanhToans', 'LyDo', {
        type: Sequelize.TEXT,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('LichSuThanhToans', 'LyDo'),
      queryInterface.removeColumn('LichSuThanhToans', 'TrangThai'),
    ]);
  },
};
