'use strict';
const { Model } = require('sequelize');
const { ModelEnum } = require('../../enums');
module.exports = (sequelize, DataTypes) => {
  class TourImages extends Model {
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
  TourImages.init(
    {
      url: DataTypes.STRING,
      source: DataTypes.BLOB,
      TourId: DataTypes.INTEGER,
      imgType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'HinhAnhTours',
    },
  );
  return TourImages;
};
