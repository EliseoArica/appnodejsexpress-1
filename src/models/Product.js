const { Schema, model } = require('mongoose');

const Product = new Schema({
    description: { type: String , required: true },
    price: { type: String , required: true },
    stock: { type: String , required: true }
});

module.exports = model('Product', Product);