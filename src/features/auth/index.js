const router = require('express').Router();
const handler = require('./auth.handler');

router.post('/sign-in', handler.handleSignIn);
router.post('/sign-up', handler.handleSignUp);

module.exports = router;

