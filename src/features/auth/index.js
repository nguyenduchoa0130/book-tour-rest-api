const router = require('express').Router();
const handler = require('./auth.handlers');
const { validateMid, verifyPermissionMid } = require('./../../middleware');
const { signInPayloadSchema, signUpPayloadSchema } = require('./auth.validator-schema');

router.post('/sign-in', validateMid(signInPayloadSchema), handler.handleSignIn);
router.post('/sign-up', validateMid(signUpPayloadSchema), handler.handleSignUp);
router.get('/sign-out', verifyPermissionMid([]), handler.signOut);

module.exports = router;
