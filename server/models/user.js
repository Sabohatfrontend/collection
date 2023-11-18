const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    firsname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
    isBlock:{
        type: Boolean,
        required: true,
        default: false
    }
},{ timestamps: true });

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

function validateUser(user) {
    const schema = Joi.object({
        firsname: Joi.string().min(2).max(50).required(),
        lastname: Joi.string().min(5).max(255).required(),
        email: Joi.string().min(2).max(50).required().email(),
        password: Joi.string().min(5).max(1024).required(),
        isAdmin: Joi.boolean().required(),
        isBlock: Joi.boolean().required()
    });

    return schema.validate(user);
}
exports.User = User;
exports.validate = validateUser;