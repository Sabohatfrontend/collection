const express = require('express');
const auth = require('../middleware/auth');
const {
    getCollection,
    getItemSingleCollection,
    createCollection,
    deleteCollection,
    updateCollection,
    getCollectionByUser,
    getCollectionByCategory
} = require('../controllers/collectionController');
const isBlock = require('../middleware/isBlock');

const router = express.Router();

router.get('/', getCollection);

router.get('/:id', getItemCollection);

router.get('/:userId', getCollectionByUser);

router.get('/:categoryId', getCollectionByCategory);

router.post('/', [auth, isBlock], createCollection);

router.delete('/:id', [auth, isBlock], deleteCollection);

router.patch('/:id', [auth, isBlock], updateCollection);

module.exports = router;