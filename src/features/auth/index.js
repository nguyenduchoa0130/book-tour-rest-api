const router = require('express').Router();
const handler = require('./auth.handler');
const {
  validateSignInPayload,
  validateSignUpPayload,
} = require('./auth.validators');

router.post('/sign-in', validateSignInPayload(), handler.handleSignIn);
router.post('/sign-up', validateSignUpPayload(), handler.handleSignUp);

module.exports = router;

