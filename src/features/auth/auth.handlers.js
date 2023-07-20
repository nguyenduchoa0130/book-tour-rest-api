const db = require('../../database');
const { AppErrorModel } = require('../../models');
const { ErrorMessageConst, UserTypeConst } = require('../../constants');
const { classToObj, isMatchPassword, hashPassword, catchAsync } = require('./../../utils');
const { ModelEnum, UserRoleEnum } = require('../../enums');

const cookieConfig = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  secure: true,
  sameSite: 'none',
  httpOnly: true,
};

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
    const returnedValue = classToObj(user, [
      'id',
      'TenTaiKhoan',
      'HoVaTen',
      'DiaChi',
      'Sdt',
      'Email',
    ]);
    res.cookie('user', JSON.stringify({ id: user.id, role: typeOfUser }), cookieConfig);
    return res.status(200).json({
      status: 'OK',
      value: {
        ...returnedValue,
        VaiTro: typeOfUser,
      },
    });
  }),

  handleSignUp: catchAsync(async (req, res, next) => {
    const { username, password, fullName, address, phone, email } = req.body;
    const modelName = ModelEnum.KhachHang;
    const model = db.getModel(modelName);

    // Check existed username
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
      Email: email,
    });

    // Successful
    const returnedValue = classToObj(newUser, [
      'id',
      'TenTaiKhoan',
      'HoVaTen',
      'DiaChi',
      'Sdt',
      'Email',
    ]);
    res.cookie(
      'user',
      JSON.stringify({ id: newUser.id, role: UserRoleEnum.KhachHang }),
      cookieConfig,
    );
    return res.status(201).json({
      status: 'OK',
      value: {
        ...returnedValue,
        VaiTro: UserRoleEnum.KhachHang,
      },
    });
  }),

  signOut: (req, res, next) => {
    return res.status(200).clearCookie('user').send();
  },
};
