const router = require('express').Router();
const handler = require('./hotels.handlers');

router.get('/_getAll', handler.getAllHotels);
router.get('/_getOne', handler.getHotel);
router.post('/_create', handler.createHotel);
router.patch('/_update/:hotelId', handler.updateHotel);
router.delete('/_delete/:hotelId', handler.deleteHotel);
module.exports = router;
