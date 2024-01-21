const router = require('express').Router();
const handlers = require('./users.handlers');

router.get('/_getAll', handlers.getUsers);
router.post('/_create', handlers.createUser);
router.patch('/_update/:userId', handlers.updateUser);
router.get('/_getTourGuides', handlers.getTourGuides);
router.delete('/_delete/:userId', handlers.deleteUser);

module.exports = router;
