const Collection = require('../models/collectionModel');
const mongoose = require('mongoose');

//get all collection

const getCollection = async (req, res) => {
    const collection = await Collection.find({}).sort({ createAt: -1 });

    res.status(200).json(collection);
}


//get a single collection
const getSingleCollection = async (req, res) => {
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

//create collection
const createCollection = async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyFields = [];
    if (!title) {
        emptyFields.push('title');
    }

    if (!load) {
        emptyFields.push('load');
    }

    if (!reps) {
        emptyFields.push('reps');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const collect = await Collection.create({ title, load, reps });
        res.status(200).json(collect);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//update collection
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

//delete collection
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
    getSingleCollection,
    createCollection,
    deleteCollection,
    updateCollection
}