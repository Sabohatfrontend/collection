const Collect = require('../models/collectModel');
const mongoose = require('mongoose');

//get all collection

const getCollection = async (req, res) => {
    const collection = await Collect.find({}).sort({ createAt: -1 });

    res.status(200).json(collection);
}


//get a single collection
const getCollect = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such collection' });
    }

    const collection = await Collect.findById(id);

    if (!collection) {
        return res.status(404).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}

//create collection
const createCollection = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const collect = await Collect.create({ title, load, reps });
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

    const collection = await Collect.findOneAndUpdate({ _id: id },{...req.body});

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

    const collection = await Collect.findOneAndDelete({ _id: id });

    if (!collection) {
        return res.status(400).json({ error: 'No such collection' });
    }

    res.status(200).json(collection);
}

module.exports = {
    getCollection,
    getCollect,
    createCollection,
    deleteCollection,
    updateCollection
}