const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: new Date(Date.now())
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;