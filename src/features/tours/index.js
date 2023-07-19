const router = require('express').Router();
const { uploadFileMid } = require('../../middleware');
const handler = require('./tours.handlers');

router.get('/_getAll', handler.getAllTours);
router.get('/_getOne/:tourId', handler.getTour);
router.post('/_create', uploadFileMid('tourImages', 10), handler.createTour);
router.get('/_getImage/:imageId', handler.getTourImage);

module.exports = router;
