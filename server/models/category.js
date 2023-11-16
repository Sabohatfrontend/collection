const mongoose = require('mongoose');
const Joi = require('joi');

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        minlength: 2,
        maxlenght: 50,
        required: true,
        unique: true
    },
    tags: {
        type: [String],
        required: true
    }
});

function validateCategory() {
    const schema = Joi.object({
        category: Joi.string().min(2).max(50).required(),
        tags: Joi.array().items(Joi.string())
    })
}

const Category = mongoose.model('Category', categorySchema);

exports.Category = Category;
exports.validate = validateCategory;
