const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { getUserById, updateUserById } = require('../controllers/adminController');
const { updateUser } = require('../controllers/userController');

router.get('/:userid', [auth, admin], getUserById);

router.patch('/:userid', [auth, admin], updateUserById);

router.patch('/setting', [auth, admin], updateUser);

module.exports = router;
