const router = require('express').Router();
const handler = require('./payment.handlers');

router.post('/_payment_intents', handler.handleSetUpPaymentIntent);

module.exports = router;
