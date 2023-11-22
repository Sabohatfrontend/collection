require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const collectionRoute = require('./routes/collection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const authRoute = require('./routes/auth');
const accountRoute = require('./routes/account');
const adminRoute = require('./routes/admin');
const app = express();
require('./startup/prop')(app);

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use('/api/account', accountRoute)

app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/auth', authRoute);
app.use('/api/collection', collectionRoute);
app.use('/api/admin', adminRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}!!!`)
        });
    })
    .catch((error) => {
        console.log(error);
    });
