'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      HoVaTen: {
        type: Sequelize.STRING,
      },
      DiaChi: {
        type: Sequelize.STRING,
      },
      Sdt: {
        type: Sequelize.STRING,
      },
      TenTaiKhoan: {
        type: Sequelize.STRING,
      },
      MatKhau: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      Email: {
        type: Sequelize.STRING,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  },
};
