const mongoose = require('mongoose');
const Category = require('./category');
const User = require('./user');
const Joi = require('joi');

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    img_url: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    custom_string1: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: String,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_string2: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: String,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_string3: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: String,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_int1: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Number,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_int2: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Number,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_int3: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Number,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_bool1: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Boolean,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_bool2: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Boolean,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_bool3: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Boolean,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_text1: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: String,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_text2: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: String,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_text3: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: String,
            default: null,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_date1: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Date,
            default: Date.now,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_date2: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Date,
            default: Date.now,
            trim: true
        },
        field_enabled: Boolean,
    },
    custom_date3: {
        field_name: {
            type: String,
            default: null,
            trim: true
        },
        field_value: {
            type: Date,
            default: Date.now,
            trim: true
        },
        field_enabled: Boolean,
    },
}, { timestamps: true });

function validateCollection(item) {
    const schema = Joi.object({
        title: Joi.string().required().trim(),
        description: Joi.string(),
        img_url: Joi.string(),
        category_id: Joi.objectId(), required(),
        user_id: Joi.objectId(), required(),
        custom_string1: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.string().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_string2: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.string().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_string3: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.string().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_int1: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.number().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_int2: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.number().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_int3: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.number().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_bool1: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.boolean().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_bool2: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.boolean().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_bool3: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.boolean().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_text1: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.string().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_text2: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.string().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_text3: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.string().trim(),
            field_enabled: Joi.boolean()
        }),
        custom_date1: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.date().format(YYYY - MM - DD).trim(),
            field_enabled: Joi.boolean()
        }),
        custom_date2: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.date().format(YYYY - MM - DD).trim(),
            field_enabled: Joi.boolean()
        }),
        custom_date3: Joi.object({
            field_name: Joi.string().trim(),
            field_value: Joi.date().format(YYYY - MM - DD).trim(),
            field_enabled: Joi.boolean()
        }),
    })

    return schema.validate(item);
}

const Collection = mongoose.model('Collection', collectionSchema);

exports.Collection = Collection;
exports.validate = validateCollection();