const express = require('express');
const Collect = require('../models/collectModel')

const router = express.Router();

router.get('/',(req,res) => {
    res.json({mssg: 'Get all collections'})
});

router.get('/:id',(req,res) => {
    res.json({mssg: 'Get single collections'})
});

router.post('/',async (req,res) => {
    const {title,load,reps} = req.body;
try{
    const collect = await Collect.create({title,load,reps});
    res.status(200).json(collect);
}catch(error){
res.status(400).json({error: error.message})
}
});

router.delete('/:id',(req,res) => {
    res.json({mssg: 'Delete collection'})
});

router.patch('/:id',(req,res) => {
    res.json({mssg: 'UPDATE collections'})
});

module.exports = router;