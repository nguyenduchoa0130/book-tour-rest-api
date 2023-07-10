const router = require('express').Router();
const { AppErrorModel } = require('../../models');

router.use((req, res, next) => {
  const notFoundError = AppErrorModel.createNotFoundError('Not found end point');
  return next(notFoundError);
});

module.exports = router;
