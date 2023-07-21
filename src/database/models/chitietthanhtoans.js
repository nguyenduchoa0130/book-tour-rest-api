'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class ChiTietThanhToans extends Model {
    static associate(models) {
      this.belongsTo(models[ModelEnum.LichSuThanhToans], { foreignKey: 'MaThanhToan' });
    }
  }
  ChiTietThanhToans.init(
    {
      MaThanhToan: DataTypes.INTEGER,
      KhachHang: DataTypes.STRING,
      Sdt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ChiTietThanhToans',
    },
  );
  return ChiTietThanhToans;
};
