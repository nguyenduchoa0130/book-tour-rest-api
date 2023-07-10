const db = require('../../database');
const { AppErrorModel } = require('../../models');
const { ErrorMessageConst, UserTypeConst } = require('../../constants');
const { classToObj, isMatchPassword, hashPassword, catchAsync } = require('./../../utils');

module.exports = {
  handleSignIn: catchAsync(async (req, res, next) => {
    const { username, password, typeOfUser } = req.body;
    const modelName = UserTypeConst[typeOfUser];
    const model = db.getModel(modelName);
    const notFoundError = AppErrorModel.createNotFoundError(
      ErrorMessageConst.ERROR_INCORRECT_USERNAME_OR_PASSWORD,
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
    const isMatch = isMatchPassword(password, user.MatKhau);
    if (!isMatch) {
      return next(notFoundError);
    }
    // Successful
    const returnedValue = classToObj(user, ['id', 'TenTaiKhoan', 'HoVaTen', 'DiaChi', 'Sdt']);
    res.cookie('user', JSON.stringify({ id: user.id, role: typeOfUser }), {
      maxAge: 5000,
      expires: new Date() + 3600,
      secure: true,
    });
    return res.status(200).json({
      status: 'OK',
      value: {
        ...returnedValue,
        role: typeOfUser,
      },
    });
  }),

  handleSignUp: catchAsync(async (req, res, next) => {
    const { username, password, typeOfUser, fullName, address, phone } = req.body;
    // Check existed username
    const modelName = UserTypeConst[typeOfUser];
    const model = db.getModel(modelName);
    const user = await model.findOne({
      where: {
        TenTaiKhoan: username,
      },
    });
    if (user) {
      return next(AppErrorModel.createBadRequestError(ErrorMessageConst.ERROR_EXISTED_ACCOUNT));
    }
    // Create a new account
    const hash = await hashPassword(password);
    const newUser = await model.create({
      TenTaiKhoan: username,
      MatKhau: hash,
      HoVaTen: fullName,
      DiaChi: address,
      Sdt: phone,
    });
    // Successful
    const returnedValue = classToObj(newUser, ['id', 'TenTaiKhoan', 'HoVaTen', 'DiaChi', 'Sdt']);
    res.cookie('user', JSON.stringify({ id: user.id, role: typeOfUser }), {
      maxAge: 5000,
      expires: new Date() + 3600,
      secure: true,
    });
    return res.status(201).json({
      status: 'OK',
      value: {
        ...returnedValue,
        role: typeOfUser,
      },
    });
  }),
};
