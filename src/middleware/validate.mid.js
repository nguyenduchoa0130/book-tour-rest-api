const { checkSchema, validationResult } = require('express-validator');
const { catchAsync } = require('../utils');
const { AppErrorModel } = require('../models');

const validateMid = (schema) => {
  return catchAsync(async (req, res, next) => {
    await checkSchema(schema).run(req);
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const [firstError] = validationErrors.array();
      return next(AppErrorModel.createBadRequestError(firstError.msg));
    }
    return next();
  });
};
module.exports = validateMid;
