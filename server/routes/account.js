const { User, validate } = require('../models/user');
const {Collection} = require('../models/collection');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const auth = require('../middleware/auth');
const {
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController');

// get user collection
router.get('/collection',auth, async (req, res) => {
    const collection = await Collection.find({ user_id: req.user._id }).sort({ createAt: -1 });

    res.status(200).json(collection);
});

// change profile
router.patch('/setting', auth, updateUser);

// Profile
router.get('/setting', auth, getUser);

router.delete('/setting', auth, deleteUser);


module.exports = router;