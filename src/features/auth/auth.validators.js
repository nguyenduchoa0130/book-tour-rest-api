const UserRoleEnum = require('../../enums/user-role.enum');
const ErrorMessages = require('./../../constants/error-message.constant');
const { validate } = require('../../middleware/validator.mid');

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

module.exports = {
  validateSignInPayload: () => {
    return validate(SIGN_IN_VALIDATOR_SCHEMA);
  },
};

