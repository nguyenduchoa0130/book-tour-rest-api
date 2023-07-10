const UserRoleEnum = require('../../enums/user-role.enum');
const ErrorMessages = require('../../constants/error-message.constants');
const { validateMid } = require('../../middleware');

const SIGN_IN_VALIDATOR_SCHEMA = {
  username: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_USERNAME,
    },
  },
  password: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_PASSWORD,
    },
  },
  typeOfUser: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_TYPE_OF_USER,
    },
    isIn: {
      options: [
        [
          UserRoleEnum.KhachHang,
          UserRoleEnum.HuongDanVien,
          UserRoleEnum.NguoiQuanLy,
          UserRoleEnum.QuanTriVien,
        ],
      ],
      errorMessage: ErrorMessages.ERROR_INVALID_TYPE_OF_USER,
    },
  },
};

const SIGN_UP_VALIDATOR_SCHEMA = {
  username: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_USERNAME,
    },
  },
  password: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_PASSWORD,
    },
  },
  typeOfUser: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_TYPE_OF_USER,
    },
    isIn: {
      options: [[UserRoleEnum.KhachHang, UserRoleEnum.HuongDanVien, UserRoleEnum.NguoiQuanLy]],
      errorMessage: ErrorMessages.ERROR_INVALID_TYPE_OF_USER,
    },
  },
  fullName: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_FULLNAME,
    },
  },
  address: {
    in: 'body',
    optional: { options: { nullable: true } },
  },
  phone: {
    in: 'body',
    notEmpty: {
      errorMessage: ErrorMessages.ERROR_EMPTY_PHONE,
    },
    matches: {
      options: /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/,
      errorMessage: ErrorMessages.ERROR_INVALID_PHONE,
    },
  },
};

module.exports = {
  validateSignInPayload: () => {
    return validateMid(SIGN_IN_VALIDATOR_SCHEMA);
  },
  validateSignUpPayload: () => {
    return validateMid(SIGN_UP_VALIDATOR_SCHEMA);
  },
};
