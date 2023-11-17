const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const auth = require('../middleware/auth');

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('This email already exists.');
    }

    user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password', 'isAdmin']));
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(_.pick(user, ['_id', 'firstname', 'lastname', 'email', 'password', 'isAdmin']));
});

module.exports = router;