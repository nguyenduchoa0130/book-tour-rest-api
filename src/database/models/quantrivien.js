'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuanTriVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuanTriVien.init({
    HoVaTen: DataTypes.STRING,
    DiaChi: DataTypes.STRING,
    Sdt: DataTypes.STRING,
    TenTaiKhoan: DataTypes.STRING,
    MatKhau: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuanTriVien',
  });
  return QuanTriVien;
};