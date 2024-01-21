'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'Khách hàng',
        },
        {
          name: 'Hướng dẫn viên',
        },
        {
          name: 'Người điều phối',
        },
        {
          name: 'Sale',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
