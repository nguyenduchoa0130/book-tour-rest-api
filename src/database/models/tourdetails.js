'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class TourDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models[ModelEnum.Tours]);
    }
  }
  TourDetails.init(
    {
      TourId: DataTypes.INTEGER,
      TieuDe: DataTypes.STRING,
      MoTaChiTiet: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'ChiTietTours',
    },
  );
  return TourDetails;
};
