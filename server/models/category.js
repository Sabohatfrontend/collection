const mongoose = require('mongoose');
const Joi = require('joi');

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
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
        category: Joi.string().required(),
        tags: Joi.array().items(Joi.string())
    })
}

const Category = mongoose.model('Category', categorySchema);

exports.Category = Category;
exports.validate = validateCategory;
