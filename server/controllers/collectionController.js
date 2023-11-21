const { Collection } = require('../models/collection');
const mongoose = require('mongoose');

const getCollection = async (req, res) => {
    const collection = await Collection.find({}).sort({ createAt: -1 });

    res.status(200).json(collection);
}


const getItemCollection = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such collection' });
    }

    const collection = await Collection.findById(id);

    if (!collection) {
        return res.status(404).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}


const getCollectionByUser = async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({ error: 'No such user' });
    }

    const collection = await Collection.find({user_id: userId});

    if (!collection) {
        return res.status(404).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}


const getCollectionByCategory = async (req, res) => {
    const { categoryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(404).json({ error: 'No such user' });
    }

    const collection = await Collection.find({category_id: categoryId});

    if (!collection) {
        return res.status(404).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}


const createCollection = async (req, res) => {
    const { title, category_id, user_id } = req.body;

    let emptyFields = [];
    if (!title) {
        emptyFields.push('title');
    }

    if (!category_id) {
        emptyFields.push('category');
    }

    if (!user_id) {
        emptyFields.push('user_id');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the required fields', emptyFields })
    }

    try {
        const collection = new Collection({
            title: req.body.title,
            description: req.body.description,
            img_url: req.body.img_url,
            category_id: req.body.category_id,
            user_id: req.user._id,
            custom_string1: req.body.custom_string1,
            custom_string2: req.body.custom_string2,
            custom_string3: req.body.custom_string3,
            custom_int1: req.body.custom_int1,
            custom_int2: req.body.custom_int2,
            custom_int3: req.body.custom_int3,
            custom_bool1: req.body.custom_bool1,
            custom_bool2: req.body.custom_bool2,
            custom_bool3: req.body.custom_bool3,
            custom_text1: req.body.custom_text1,
            custom_text2: req.body.custom_text2,
            custom_text3: req.body.custom_text3,
            custom_date1: req.body.custom_date1,
            custom_date2: req.body.custom_date2,
            custom_date3: req.body.custom_date3,
        });
        await collection.save();
        res.status(200).json(collection);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const updateCollection = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such collection' });
    }

    const collection = await Collection.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!collection) {
        return res.status(400).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}


const deleteCollection = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such collection' });
    }

    const collection = await Collection.findOneAndDelete({ _id: id });

    if (!collection) {
        return res.status(400).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}

module.exports = {
    getCollection,
    getItemCollection,
    createCollection,
    deleteCollection,
    updateCollection,
    getCollectionByUser,
    getCollectionByCategory
}