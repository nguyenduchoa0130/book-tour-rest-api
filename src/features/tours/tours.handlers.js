const express = require('express');
const db = require('./../../database');
const { ModelEnum } = require('../../enums');
const { DateUtils } = require('../../utils');
const { Op } = require('sequelize');
const AppError = require('../../models/error.model');

const Tours = db.getModel(ModelEnum.Tours);
const ChiTietTours = db.getModel(ModelEnum.ChiTietTours);
const HinhAnhTours = db.getModel(ModelEnum.HinhAnhTours);

module.exports = {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  getAllTours: async (req, res, next) => {
    const { keyword, startDate, place } = req.query;
    let query = {};
    if (keyword) {
      query = {
        ...query,
        TenTour: {
          [Op.iLike]: `%${keyword}%`,
        },
      };
    }
    if (startDate) {
      query = {
        ...query,
        NgayBatDau: {
          [Op.gte]: new Date(startDate),
        },
      };
    }
    if (place) {
      query = {
        ...query,
        DiaDiem: place,
      };
    }
    const tours = await Tours.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: {
        [Op.and]: {
          ...query,
        },
      },
      order: [['id', 'desc']],
      include: [
        {
          model: ChiTietTours,
          attributes: {
            exclude: ['TourId', 'createdAt', 'updatedAt'],
          },
        },
        {
          model: HinhAnhTours,
          attributes: {
            exclude: ['TourId', 'source', 'imgType', 'createdAt', 'updatedAt'],
          },
        },
      ],
    });
    return res.status(200).json({
      status: 'OK',
      value: tours,
    });
  },

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  getTour: async (req, res, next) => {
    const { tourId } = req.params;
    const tour = await Tours.findOne({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: {
        id: tourId,
      },
      include: [
        {
          model: ChiTietTours,
          attributes: {
            exclude: ['TourId', 'createdAt', 'updatedAt'],
          },
        },
        {
          model: HinhAnhTours,
          attributes: {
            exclude: ['TourId', 'source', 'imgType', 'createdAt', 'updatedAt'],
          },
        },
      ],
    });
    if (!tour) {
      return next(AppError.createNotFoundError('Không tìm thấy tour'));
    }
    return res.status(200).json({
      status: 'OK',
      value: tour,
    });
  },

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  createTour: async (req, res, next) => {
    const { tourName, startDate, endDate, place, numberOfUsers, tourDetails, price } = req.body;
    const { tourImages } = req.files;

    // Create Tours
    const countDate = DateUtils.countDate(startDate, endDate);
    const dateStr = `${countDate} ngày`;
    const nightStr = countDate - 1 > 0 ? `${countDate - 1} đêm` : '';
    const tourPayload = {
      TenTour: tourName.trim(),
      Gia: +price,
      SoLuongNguoi: +numberOfUsers,
      NgayBatDau: DateUtils.getDate(startDate),
      NgayKetThuc: DateUtils.getDate(endDate),
      ChiTietThoiGian: `${dateStr} ${nightStr}`.trim(),
      DiaDiem: place.trim(),
    };
    const newTour = await Tours.create(tourPayload);
    // Create tour details
    const details = JSON.parse(tourDetails);
    const detailPromises = details.map((item) => {
      return ChiTietTours.create({
        TourId: newTour.id,
        TieuDe: item.title,
        MoTaChiTiet: item.description,
      });
    });
    await Promise.all(detailPromises);
    // Create Tour Images
    const imagePromises = tourImages.map((img) => {
      return HinhAnhTours.create({
        source: img.buffer,
        TourId: newTour.id,
        imgType: img.mimetype,
      });
    });
    const newTourImages = await Promise.all(imagePromises);
    // Update Url
    const updateTourImagesUrl = newTourImages.map((item) => {
      return item.update({
        url: `${process.env.HOST_ORIGIN}/api/tours/_getImage/${item.id}`,
      });
    });
    await updateTourImagesUrl;

    return res.status(201).json({
      status: 'OK',
      value: newTour.toJSON(),
    });
  },

  getTourImage: async (req, res, next) => {
    const { imageId } = req.params;
    const image = await HinhAnhTours.findByPk(+imageId, {
      attributes: ['source', 'imgType'],
    });
    return res.set('Content-Type', image.imgType).send(image.source);
  },
};
