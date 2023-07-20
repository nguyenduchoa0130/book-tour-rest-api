'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Tours', 'TrangThai', {
      type: Sequelize.STRING,
      defaultValue: 'Đang mở',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tours', 'TrangThai');
  },
};
