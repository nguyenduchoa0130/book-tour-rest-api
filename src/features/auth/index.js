const router = require('express').Router();
const handler = require('./auth.handler');
const { validateSignInPayload } = require('./auth.validators');

router.post('/sign-in', validateSignInPayload(), handler.handleSignIn);
router.post('/sign-up', handler.handleSignUp);

module.exports = router;

