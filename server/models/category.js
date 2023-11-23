const mongoose = require('mongoose');
const Joi = require('joi');

const categorySchema = new mongoose.Schema({
    category_name: {
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
},{ timestamps: true });

function validateCategory(category) {
    const schema = Joi.object({
        category_name: Joi.string().min(2).max(50).required(),
        tags: Joi.array().items(Joi.string())
    });
    return schema.validate(category);
}

const Category = mongoose.model('Category', categorySchema);

exports.Category = Category;
exports.validate = validateCategory;
