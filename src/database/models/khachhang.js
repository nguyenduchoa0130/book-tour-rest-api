'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    static associate(models) {}
  }
  KhachHang.init(
    {
      HoVaTen: DataTypes.STRING,
      DiaChi: DataTypes.STRING,
      Sdt: DataTypes.STRING,
      TenTaiKhoan: DataTypes.STRING,
      MatKhau: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'KhachHang',
    }
  );
  return KhachHang;
};

