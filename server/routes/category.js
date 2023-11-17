const express = require('express');
const router = express.Router();
const { Category, validate } = require('../models/category');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const categories = await Category.find().sort('category_name');
    res.send(categories);
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    let category = new Category({
        category_name: req.body.category_name,
        tags: req.body.tags
    });

    category = await category.save();

    res.status(201).send(category);
});

router.get('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).send('404 Not found');
    }

    let category = new Category.findById(req.params.id);

    if (!category) {
        return res.status(404).send('404 Not found');
    }
    res.send(category);
});

router.put('/:id', auth, async (req, res) => {
    const { error } = validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let category = {
        category_name: req.body.category_name,
        tags: req.body.tags
    }
    category = await Category.findByIdAndUpdate(req.params.id, category, { new: true });

    if (!category) {
        return res.status(404).send('404 Not Found!');
    }

    res.send(category);
});

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) {
        return res.status(404).send('404 Not Found');
    }

    res.send(category);
});

module.exports = router;