'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('HuongDanViens', 'TrangThai', {
      type: Sequelize.STRING,
      defaultValue: 'Đang Mở',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('HuongDanViens', 'TrangThai');
  },
};
