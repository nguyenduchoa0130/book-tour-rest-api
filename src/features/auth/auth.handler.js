const express = require('express');
const db = require('./../../database');
const USER_TYPE = require('./../../constants/user-type.constant');
const AppError = require('./../../models/error.model');
const passwordUtil = require('./../../utils/password.util');
const catchAsync = require('../../utils/catch-async.util');
const ErrorMessages = require('./../../constants/error-message.constant');
const classToObj = require('../../utils/class-to-obj.util');

module.exports = {
  handleSignIn: catchAsync(async (req, res, next) => {
    const { username, password, typeOfUser } = req.body;
    const modelName = USER_TYPE[typeOfUser];
    const model = db.getModel(modelName);
    const notFoundError = AppError.createNotFoundError(
      ErrorMessages.ERROR_INCORRECT_USERNAME_OR_PASSWORD
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
    const returnedValue = classToObj(user, [
      'id',
      'TenTaiKhoan',
      'HoVaTen',
      'DiaChi',
      'Sdt',
    ]);
    return res.status(200).json({
      status: 'OK',
      value: returnedValue,
    });
  }),

  handleSignUp: catchAsync(async (req, res, next) => {
    const { username, password, typeOfUser, fullName, address, phone } =
      req.body;
    // Check existed username
    const modelName = USER_TYPE[typeOfUser];
    const model = db.getModel(modelName);
    const user = await model.findOne({
      where: {
        TenTaiKhoan: username,
      },
    });
    if (user) {
      return next(
        AppError.createBadRequestError(ErrorMessages.ERROR_EXISTED_ACCOUNT)
      );
    }
    // Create a new account
    const hashPassword = await passwordUtil.hashPassword(password);
    const newUser = await model.create({
      TenTaiKhoan: username,
      MatKhau: hashPassword,
      HoVaTen: fullName,
      DiaChi: address,
      Sdt: phone,
    });
    const returnedValue = classToObj(newUser, [
      'id',
      'TenTaiKhoan',
      'HoVaTen',
      'DiaChi',
      'Sdt',
    ]);
    return res.status(201).json({
      status: 'OK',
      value: returnedValue,
    });
  }),
};

