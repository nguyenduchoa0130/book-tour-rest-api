'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Promise.all([
      queryInterface.bulkInsert(
        'NguoiQuanLies',
        [
          {
            HoVaTen: 'Nguyen Linh',
            DiaChi: 'HN',
            Sdt: '0123456789',
            TenTaiKhoan: 'admin1',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'admin1@gmail.com',
          },
          {
            HoVaTen: 'Han Linh',
            DiaChi: 'N',
            Sdt: '0123456788',
            TenTaiKhoan: 'admin2',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'admin2@gmail.com',
          },
        ],
        {},
      ),
      queryInterface.bulkInsert(
        'HuongDanViens',
        [
          {
            HoVaTen: 'Nguyen Linh',
            DiaChi: 'HN',
            Sdt: '0123456787',
            TenTaiKhoan: 'huongdanvien1',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'huongdanvien1@gmail.com',
          },
          {
            HoVaTen: 'Han Linh',
            DiaChi: 'N',
            Sdt: '0123456786',
            TenTaiKhoan: 'huongdanvien2',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'huongdanvien2@gmail.com',
          },
        ],
        {},
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await Promise.all([
      queryInterface.bulkDelete('NguoiQuanLies', null, {}),
      queryInterface.bulkDelete('HuongDanViens', null, {}),
    ]);
  },
};
