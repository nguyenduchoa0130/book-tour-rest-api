'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class Tours extends Model {
    static associate(models) {
      this.hasMany(models[ModelEnum.ChiTietTours]);
      this.hasMany(models[ModelEnum.HinhAnhTours]);
      this.hasMany(models[ModelEnum.LichSuThanhToans]);
    }
  }
  Tours.init(
    {
      TenTour: DataTypes.STRING,
      Gia: DataTypes.DOUBLE,
      DiaDiem: DataTypes.STRING,
      SoLuongNguoi: DataTypes.INTEGER,
      NgayBatDau: DataTypes.DATE,
      NgayKetThuc: DataTypes.DATE,
      ChiTietThoiGian: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tours',
    },
  );
  return Tours;
};
