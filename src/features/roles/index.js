const router = require('express').Router();
const handler = require('./roles.handlers');

router.get('/_get', handler.getRoles);
module.exports = router;
