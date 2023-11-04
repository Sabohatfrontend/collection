require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const collections = require('./routes/collections');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/collection', collections);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}!!!`)
        });
    })
    .catch((error) => {
        console.log(error);
    });