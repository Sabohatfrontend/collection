const mongoose = require('mongoose');
const Category = require('./category');
const User = require('./user');

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // description: String,
    // img_url: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Collection = mongoose.model('Collection', collectionSchema);

async function createCollection(title,ctg,user) {
    const collection = new Collection({
       title:title,
       category_id: ctg,
       user_id:user
    });
    const result = await collection.save();
    console.log(result);
}

createCollection('Yozildi','654c6997602dabdee99d7c61','654c6a917804f75cdbfaa3ec');

// async function getCollection(){
//     const collection = await Collection
//     .find()
//     .populate('category_id');
//     console.log(collection);
// }

// getCollection();

module.exports = Collection;