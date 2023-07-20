'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class ChiTietThanhToans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
