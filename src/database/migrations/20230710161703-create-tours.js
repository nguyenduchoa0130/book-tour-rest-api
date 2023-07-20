'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TenTour: {
        type: Sequelize.STRING,
      },
      Gia: {
        type: Sequelize.DOUBLE,
      },
      DiaDiem: {
        type: Sequelize.STRING,
      },
      SoLuongNguoi: {
        type: Sequelize.INTEGER,
      },
      NgayBatDau: {
        type: Sequelize.DATE,
      },
      NgayKetThuc: {
        type: Sequelize.DATE,
      },
      ChiTietThoiGian: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tours');
  },
};
