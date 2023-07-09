const express = require('express');

module.exports = {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleCreateTour: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleFullUpdateTour: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handlePartialUpdateTour: async (req, res, next) => {},

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleDeleteTour: async (req, res, next) => {},
};

