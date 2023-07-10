const router = require('express').Router();
const handler = require('./tours.handlers');

router.get('/_getAll', handler.getAllTours);
router.get('/_getOne', handler.getTour);
router.post('/_create', handler.createTour);
router.patch('/_update/:tourId', handler.updateTour);
router.delete('/_delete:tourId', handler.deleteTour);

module.exports = router;
