const { catchAsync } = require('../../utils');

module.exports = {
  getUser: catchAsync(async (req, res, next) => {
    return res.status(200).json({});
  }),
  updateUser: catchAsync(async (req, res, next) => {
    return res.status(200).json({});
  }),
};
