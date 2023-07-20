'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class LichSuThanhToan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models[ModelEnum.KhachHang], { foreignKey: 'NguoiDatId' });
      this.belongsTo(models[ModelEnum.Tours]);
      this.hasMany(models[ModelEnum.ChiTietThanhToans], { foreignKey: 'MaThanhToan' });
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
    },
    {
      sequelize,
      modelName: 'LichSuThanhToans',
    },
  );
  return LichSuThanhToan;
};
