const express = require('express');
const db = require('./../../database');
const USER_TYPE = require('./../../constants/user-type.constant');
const AppError = require('./../../models/error.model');
const passwordUtil = require('./../../utils/password.util');
const catchAsync = require('../../utils/catch-async.util');

module.exports = {
  /**
   * Handling sign in
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleSignIn: catchAsync(async (req, res, next) => {
    const { username, password, typeOfUser } = req.body;
    const modelName = USER_TYPE[typeOfUser];
    const model = db.getModel(modelName);
    const notFoundError = AppError.createNotFoundError(
      'Tên đăng nhập hoặc mật khẩu không chính xác'
    );
    // Check username
    const user = await model.findOne({
      where: {
        TenTaiKhoan: username,
      },
    });
    // Case: no users found
    if (!user) {
      return next(notFoundError);
    }
    // Case: password is incorrect
    const isMatch = passwordUtil.isMatchPassword(password, user.MatKhau);
    if (!isMatch) {
      return next(notFoundError);
    }
  }),
  /**
   * Handling sign up
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleSignUp: catchAsync(async (req, res, next) => {}),
};

