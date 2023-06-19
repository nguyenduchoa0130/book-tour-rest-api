const { checkSchema, validationResult } = require('express-validator');
const ApiError = require('../models/error.model');
const catchAsync = require('../utils/catch-async.util');

module.exports = {
  validate: (schema) => {
    return catchAsync(async (req, res, next) => {
      await checkSchema(schema).run(req);
      const validationErrors = validationResult(req);
      if (!validationErrors.isEmpty()) {
        const [firstError] = validationErrors.array();
        return next(ApiError.createBadRequestError(firstError.msg));
      }
      return next();
    });
  },
};

