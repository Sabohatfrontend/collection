const mongoose = require('mongoose');
const {User} = require('../models/user');

const getUserById = async (req, res) => {
    const { userid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userid)) {
        return res.status(404).json({ error: 'No such user' });
    }

    const user = await User.findById(userid).select('-password');

    if (!user) {
        return res.status(404).json({ error: 'No such user' });
    }

    res.status(200).json(user);
}

const updateUserById = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.userid }, { ...req.body });
    if (!user) {
        return res.status(400).json({ error: 'No such user' });
    }

    res.status(200).json(user);
}

module.exports = {
    getUserById,
    updateUserById
}