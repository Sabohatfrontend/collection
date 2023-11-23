require('dotenv').config();
const path = require('path');

const express = require('express');
const mongoose = require('mongoose')
const collectionRoute = require('./routes/collection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const authRoute = require('./routes/auth');
const accountRoute = require('./routes/account');
const adminRoute = require('./routes/admin');
const app = express();
const cors =require('cors');
require('./startup/prop')(app);

const corsOption ={
    origin: "https://localhost:3000"
}

app.use(express.json());
app.use(cors(corsOption));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use('/api/account', accountRoute)

app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/auth', authRoute);
app.use('/api/collection', collectionRoute);
app.use('/api/admin', adminRoute);


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}!!!`)
        });
    })
    .catch((error) => {
        console.log(error);
    });
