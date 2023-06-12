require('dotenv').config();
const express = require('express');
const logger = require('./../../utils/logger.util');

/**
 * Handling error
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const handleError = (err, req, res, next) => {
  const statusCode = Number(err.statusCode) || 500;
  const message = err.message || 'Internal server error';
  if (process.env.NODE_ENV === 'production') {
    logger.error(err);
  }
  return res.status(statusCode).json({
    error: err.type || 'INTERNAL_ERROR_SERVER',
    message,
  });
};

module.exports = handleError;

