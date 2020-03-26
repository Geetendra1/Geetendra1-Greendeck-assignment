const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: String,
        maxlength: 50
    },
    retailer: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    brands: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


productSchema.index({ 
    product:'text',
    description: 'text',

}, {
    weights: {

        product : 5,
        description : 1
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }