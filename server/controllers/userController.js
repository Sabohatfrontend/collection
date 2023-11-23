const { User, validate } = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');

//Profile
const getUser = async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
        return res.status(404).json({ error: 'No such user' });
    }
    res.send(user);
}


const createUser = async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(400).send('This email already exists.');
    }

    user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password', 'isAdmin', 'isBlock']));

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'firstname', 'lastname', 'email', 'password', 'isAdmin', 'isBlock']));
}



const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.user._id }, { ...req.body });

    if (!user) {
        return res.status(400).json({ error: 'No such user' });
    }

    res.status(200).json(user);
}

//Sign out
const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.user._id);

    if (!user) {
        return res.status(400).json({ error: 'No such user' });
    }

    res.status(200).json(user);
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser
}