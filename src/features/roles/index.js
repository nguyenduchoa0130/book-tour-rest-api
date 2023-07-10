const router = require('express').Router();
const handler = require('./roles.handlers');

router.get('/_getAll', handler.getAllRoles);
module.exports = router;
