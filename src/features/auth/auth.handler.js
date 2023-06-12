const express = require('express');
const db = require('./../../database');
const USER_TYPE = require('./../../constants/user-type.constant');
const AppError = require('./../../models/error.model');
const passwordUtil = require('./../../utils/password.util');

module.exports = {
  /**
   * Handling sign in
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleSignIn: async (req, res, next) => {
    try {
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
    } catch (error) {
      return next(error);
    }
  },
  /**
   * Handling sign up
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  handleSignUp: async (req, res, next) => {},
};

