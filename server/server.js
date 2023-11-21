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
// app.use('/api/collection/search/q-', collections);
// app.use('/api/collection/filter/q-', collections);
//app.use('api/admin/users');
//app.use('api/admin/users/:id');delete,block, add admin, delete from admin, delete themselves

// app.use('api/admin/collection')delete, add,patch



mongoose.connect('mongodb://localhost/virtualdars')
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}!!!`)
        });
    })
    .catch((error) => {
        console.log(error);
    });
