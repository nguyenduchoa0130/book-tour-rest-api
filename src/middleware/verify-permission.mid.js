const { UserRoleEnum } = require('../enums');
const { AppErrorModel } = require('../models');

/**
 * Check permissions
 * @param {number[]} roles
 * @returns
 */
const verifyPermissionMid = (roles = []) => {
  return (req, res, next) => {
    if (!req.cookies.user) {
      return next(AppErrorModel.createUnauthorizeError('Bạn chưa đăng nhập !!'));
    }
    const user = JSON.parse(req.cookies.user);
    if (roles.length) {
      const err = AppErrorModel.createForbiddenError(
        'Bạn không có quyền thực hiện thao tác này !!',
      );
    }
    req.user = user;
    return next();
  };
};

module.exports = verifyPermissionMid;
