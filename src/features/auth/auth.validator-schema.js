const { UserRoleEnum } = require('../../enums');
const { ErrorMessageConst } = require('../../constants');

const signInPayloadSchema = {
  username: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessageConst.ERROR_EMPTY_USERNAME,
    },
  },
  password: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessageConst.ERROR_EMPTY_PASSWORD,
    },
  },
  typeOfUser: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessageConst.ERROR_EMPTY_TYPE_OF_USER,
    },
    isIn: {
      options: [[UserRoleEnum.KhachHang, UserRoleEnum.HuongDanVien, UserRoleEnum.NguoiQuanLy]],
      errorMessage: ErrorMessageConst.ERROR_INVALID_TYPE_OF_USER,
    },
  },
};

const signUpPayloadSchema = {
  username: {
    in: 'body',
    notEmpty: {
      errorMessage: UserRoleEnum.ERROR_EMPTY_USERNAME,
    },
  },
  password: {
    in: 'body',
    notEmpty: {
      errorMessage: UserRoleEnum.ERROR_EMPTY_PASSWORD,
    },
  },
  typeOfUser: {
    in: 'body',
    notEmpty: {
      errorMessage: UserRoleEnum.ERROR_EMPTY_TYPE_OF_USER,
    },
    isIn: {
      options: [[UserRoleEnum.KhachHang, UserRoleEnum.HuongDanVien, UserRoleEnum.NguoiQuanLy]],
      errorMessage: UserRoleEnum.ERROR_INVALID_TYPE_OF_USER,
    },
  },
  fullName: {
    in: 'body',
    notEmpty: {
      errorMessage: UserRoleEnum.ERROR_EMPTY_FULLNAME,
    },
  },
  address: {
    in: 'body',
    optional: { options: { nullable: true } },
  },
  phone: {
    in: 'body',
    notEmpty: {
      errorMessage: UserRoleEnum.ERROR_EMPTY_PHONE,
    },
    matches: {
      options: /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/,
      errorMessage: UserRoleEnum.ERROR_INVALID_PHONE,
    },
  },
};

module.exports = {
  signInPayloadSchema,
  signUpPayloadSchema,
};
