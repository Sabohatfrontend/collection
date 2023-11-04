const express = require('express');
const {
    getCollection,
    getCollect,
    createCollection,
    deleteCollection,
    updateCollection
} = require('../controllers/collectController');

const router = express.Router();

router.get('/', getCollection);

router.get('/:id', getCollect);

router.post('/', createCollection);

router.delete('/:id', deleteCollection);

router.patch('/:id', updateCollection);

module.exports = router;