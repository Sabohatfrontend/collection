const express = require('express');
const router = express.Router();
const { Category, validate } = require('../models/category');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const categories = await Category.find().sort('category_name');
    res.status(200).json(categories);
});

router.post('/', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message)
    }

    let category = new Category({
        category_name: req.body.category_name,
        tags: req.body.tags
    });

    category = await category.save();

    res.status(201).json(category);
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('404 Not found');
    }

    let category = new Category.findById(id);

    if (!category) {
        return res.status(404).json('404 Not found');
    }
    res.status(200).json(category);
});


router.put('/:id', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    let category = {
        category_name: req.body.category_name,
        tags: req.body.tags
    }
    category = await Category.findByIdAndUpdate(req.params.id, category, { new: true });

    if (!category) {
        return res.status(404).json('404 Not Found!');
    }

    res.json(category);
});


router.delete('/:id', [auth, admin], async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) {
        return res.status(404).json('404 Not Found');
    }

    res.json(category);
});

module.exports = router;