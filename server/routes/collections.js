const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.json({mssg: 'Get all collections'})
});

router.get('/:id',(req,res) => {
    res.json({mssg: 'Get single collections'})
});

router.post('/',(req,res) => {
    res.json({mssg: 'POST a new collection'})
});

router.delete('/:id',(req,res) => {
    res.json({mssg: 'Delete collection'})
});

router.patch('/:id',(req,res) => {
    res.json({mssg: 'UPDATE collections'})
});

module.exports = router;