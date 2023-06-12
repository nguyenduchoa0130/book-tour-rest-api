const router = require('express').Router();
const handler = require('./tour.handler');
router.post('/_create', handler.handleCreateTour);
router
  .route('/_update')
  .put(handler.handleFullUpdateTour)
  .patch(handler.handlePartialUpdateTour);
router.delete('/_delete', handler.handleDeleteTour);
module.exports = router;

