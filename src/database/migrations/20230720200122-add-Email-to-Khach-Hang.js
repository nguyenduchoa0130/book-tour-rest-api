'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await Promise.all([
      queryInterface.addColumn('KhachHangs', 'Email', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('HuongDanViens', 'Email', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('NguoiQuanLies', 'Email', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await Promise.all([
      queryInterface.removeColumn('KhachHangs', 'Email'),
      queryInterface.removeColumn('HuongDanViens', 'Email'),
      queryInterface.removeColumn('NguoiQuanLies', 'Email'),
    ]);
  },
};
