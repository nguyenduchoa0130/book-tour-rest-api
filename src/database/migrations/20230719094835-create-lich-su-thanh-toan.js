'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LichSuThanhToans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UUID: {
        type: Sequelize.STRING,
      },
      SoThe: {
        type: Sequelize.STRING,
      },
      NgayDat: {
        type: Sequelize.DATE,
      },
      NguoiDatId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KhachHangs',
          key: 'id',
        },
      },
      TourId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tours',
          key: 'id',
        },
      },
      SoTien: {
        type: Sequelize.DOUBLE,
      },
      SdtNguoiDat: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LichSuThanhToans');
  },
};
