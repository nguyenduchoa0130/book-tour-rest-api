'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TourImages.init({
    url: DataTypes.STRING,
    source: DataTypes.BLOB,
    tourId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourImages',
  });
  return TourImages;
};