'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NguoiQuanLy extends Model {
    static associate(models) {}
  }
  NguoiQuanLy.init(
    {
      HoVaTen: DataTypes.STRING,
      DiaChi: DataTypes.STRING,
      Sdt: DataTypes.STRING,
      TenTaiKhoan: DataTypes.STRING,
      MatKhau: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NguoiQuanLy',
    }
  );
  return NguoiQuanLy;
};

