const router = require('express').Router();
const handlers = require('./users.handlers');

router.get('/_getAll', handlers.getUsers);
router.post('/_create', handlers.createUser);
router.patch('/_update/:userId', handlers.updateUser);
router.get('/_getTourGuides', handlers.getTourGuides);

module.exports = router;
