'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class Tours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      HuongDanVienId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Tours',
    },
  );
  return Tours;
};
