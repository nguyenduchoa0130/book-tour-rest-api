'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkInsert(
        'NguoiQuanLies',
        [
          {
            HoVaTen: 'Admin 1',
            DiaChi: 'HN',
            Sdt: '0123456789',
            TenTaiKhoan: 'admin1',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'admin1@gmail.com',
          },
          {
            HoVaTen: 'Admin 2',
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
            HoVaTen: 'Huong Dan Vien 1',
            DiaChi: 'HN',
            Sdt: '0123456787',
            TenTaiKhoan: 'huongdanvien1',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'huongdanvien1@gmail.com',
          },
          {
            HoVaTen: 'Huong Dan Vien 2',
            DiaChi: 'N',
            Sdt: '0123456786',
            TenTaiKhoan: 'huongdanvien2',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'huongdanvien2@gmail.com',
          },
        ],
        {},
      ),
      queryInterface.bulkInsert(
        'Sales',
        [
          {
            HoVaTen: 'Sale 1',
            DiaChi: 'HN',
            Sdt: '0123456787',
            TenTaiKhoan: 'sale1',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'sale1@gmail.com',
          },
          {
            HoVaTen: 'Sale 2',
            DiaChi: 'N',
            Sdt: '0123456786',
            TenTaiKhoan: 'sale2',
            MatKhau: '$2a$10$P4O9clj/juQFYJE7xJI5cu2VqOPVi5VpG/7b5bVTbxFenkNzZsft6', // 123456
            Email: 'sale2@gmail.com',
          },
        ],
        {},
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkDelete('NguoiQuanLies', null, {}),
      queryInterface.bulkDelete('HuongDanViens', null, {}),
      queryInterface.bulkDelete('Sales', null, {}),
    ]);
  },
};
