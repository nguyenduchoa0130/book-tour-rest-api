'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class HuongDanVien extends Model {
    static associate(models) {
      this.hasMany(models[ModelEnum.LichSuThanhToans]);
    }
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
    },
  );
  return HuongDanVien;
};
