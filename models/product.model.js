const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    image: { type: String }
}, { timestamps: true }); // timestamps will automatically add createdAt and updatedAt

const Product = mongoose.model("Product", productschema);// create a model named Product using the productschema

module.exports = Product;