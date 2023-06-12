'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HuongDanVien extends Model {
    static associate(models) {}
  }
  HuongDanVien.init(
    {
      HoVaTen: DataTypes.STRING,
      DiaChi: DataTypes.STRING,
      Sdt: DataTypes.STRING,
      TenTaiKhoan: DataTypes.STRING,
      MatKhau: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'HuongDanVien',
    }
  );
  return HuongDanVien;
};

