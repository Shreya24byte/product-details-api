const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    "productName": String,
    "price": Number
}, {
    collection:"productsCollection",
}
);

module.exports = mongoose.model("productsCollection", productSchema);