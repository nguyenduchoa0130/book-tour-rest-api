const { ErrorMessageConst, UserTypeConst } = require('../../constants');
const { ModelEnum, UserRoleEnum } = require('../../enums');
const { AppErrorModel } = require('../../models');
const { catchAsync, hashPassword } = require('../../utils');
const db = require('./../../database');

const NguoiQuanLy = db.getModel(ModelEnum.NguoiQuanLy);
const HuongDangVien = db.getModel(ModelEnum.HuongDanVien);
const KhachHang = db.getModel(ModelEnum.KhachHang);

module.exports = {
  getUsers: catchAsync(async (req, res, next) => {
    const config = {
      attributes: {
        exclude: ['MatKhau', 'createdAt', 'updatedAt'],
      },
    };
    const [managers, tourGuides, customers] = await Promise.all([
      NguoiQuanLy.findAll(config),
      HuongDangVien.findAll(config),
      KhachHang.findAll(config),
    ]);
    return res.status(200).json({
      status: 'OK',
      value: [
        {
          role: 'Quản lý',
          roleId: UserRoleEnum.NguoiQuanLy,
          users: managers.map((item) => ({ ...item.toJSON(), VaiTro: UserRoleEnum.NguoiQuanLy })),
        },
        {
          role: 'Hướng dẫn viên',
          roleId: UserRoleEnum.HuongDanVien,
          users: tourGuides.map((item) => ({
            ...item.toJSON(),
            VaiTro: UserRoleEnum.HuongDanVien,
          })),
        },
        {
          role: 'Khách Hàng',
          roleId: UserRoleEnum.KhachHang,
          users: customers.map((item) => ({ ...item.toJSON(), VaiTro: UserRoleEnum.KhachHang })),
        },
      ],
    });
  }),

  createUser: catchAsync(async (req, res, next) => {
    const { username, password, fullName, address, phone, typeOfUser } = req.body;
    const modelName = UserTypeConst[typeOfUser];
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
    });
    const rawUser = newUser.toJSON();

    return res.status(200).json({
      status: 'OK',
      value: {
        id: rawUser.id,
        HoVaTen: rawUser.HoVaTen,
        DiaChi: rawUser.DiaChi,
        Sdt: rawUser.Sdt,
        TenTaiKhoan: rawUser.username,
        VaiTro: typeOfUser,
      },
    });
  }),

  updateUser: catchAsync(async (req, res, next) => {
    const { userId } = req.params;
    return res.status(200).json({
      status: 'Ok',
      value: userId,
    });
  }),
};
