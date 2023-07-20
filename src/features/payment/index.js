const router = require('express').Router();
const handler = require('./payment.handlers');

router.post('/_payment_intents', handler.handleSetUpPaymentIntent);
router.post('/_create', handler.handleCreatePayment);
router.get('/_getOne/:userId', handler.handleGetPaymentHistories);
router.get('/_getAll/:requestType', handler.handleGetPaymentHistoriesByCategory);
router.patch('/_update/:paymentId', handler.handleUpdatePayment);
router.get('/_getAssignedTours/:userId', handler.handleGetAssignedTours);

module.exports = router;
