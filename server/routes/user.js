const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// Log in
router.post('/', createUser);

module.exports = router;