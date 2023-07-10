const db = require('./../../database');
const { catchAsync } = require('../../utils');
const { ModelEnum } = require('../../enums');
const Roles = db.getModel(ModelEnum.Roles);

module.exports = {
  getAllRoles: catchAsync(async (req, res, next) => {
    const roles = await Roles.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.status(200).json({
      status: 'Ok',
      value: roles,
    });
  }),
};
