'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class LichSuThanhToan extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models[ModelEnum.KhachHang], { foreignKey: 'NguoiDatId' });
      this.belongsTo(models[ModelEnum.Tours]);
      this.hasMany(models[ModelEnum.ChiTietThanhToans], { foreignKey: 'MaThanhToan' });
      this.belongsTo(models[ModelEnum.HuongDanVien], { foreignKey: 'HuongDanVienId' });
    }
  }
  LichSuThanhToan.init(
    {
      UUID: DataTypes.STRING,
      SoThe: DataTypes.STRING,
      NgayDat: DataTypes.DATE,
      NguoiDatId: DataTypes.INTEGER,
      TourId: DataTypes.INTEGER,
      SoTien: DataTypes.DOUBLE,
      SdtNguoiDat: DataTypes.STRING,
      TrangThai: DataTypes.STRING,
      LyDo: DataTypes.STRING,
      HuongDanVienId: DataTypes.INTEGER,
      NgayXuLy: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'LichSuThanhToans',
    },
  );
  return LichSuThanhToan;
};
