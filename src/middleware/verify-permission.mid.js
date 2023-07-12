const { AppErrorModel } = require('../models');

/**
 * Check permissions
 * @param {number[]} roles
 * @returns
 */
const verifyPermissionMid = (roles = []) => {
  return (req, res, next) => {
    const { user } = req.cookies;
    if (!user) {
      return next(AppErrorModel.createUnauthorizeError('Bạn chưa đăng nhập !!'));
    }
    if (roles.length && !roles.includes(user.role)) {
      return next(
        AppErrorModel.createForbiddenError('Bạn không có quyền thực hiện thao tác này !!'),
      );
    }
    req.user = user;
    return next();
  };
};

module.exports = verifyPermissionMid;
