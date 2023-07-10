const router = require('express').Router();
const express = require('express');

module.exports = {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  getAllHotels: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  getHotel: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  createHotel: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  updateHotel: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  deleteHotel: async (req, res, next) => {},
};
