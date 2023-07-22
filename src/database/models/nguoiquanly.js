'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class NguoiQuanLy extends Model {
    static associate(models) {
      this.hasMany(models[ModelEnum.LichSuThanhToans]);
    }
  }
  NguoiQuanLy.init(
    {
      HoVaTen: DataTypes.STRING,
      DiaChi: DataTypes.STRING,
      Sdt: DataTypes.STRING,
      TenTaiKhoan: DataTypes.STRING,
      MatKhau: DataTypes.STRING,
      Email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NguoiQuanLy',
    },
  );
  return NguoiQuanLy;
};
