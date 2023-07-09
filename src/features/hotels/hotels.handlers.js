const router = require('express').Router();
const express = require('express');

module.exports = {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleCreateHotel: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleFullUpdateHotel: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handlePartialUpdateHotel: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleDeleteHotel: async (req, res, next) => {},
};



module.exports = router;