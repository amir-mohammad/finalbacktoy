const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title:String,
    images:[String],
    barcode:String,
    reviews:[{
        customerName:String,
        createAt:String,
        body:String,
        rate:Number
    }],
    price:String,
    offerPrice:String,
    point:String,
    Quantity:Number,
    options:[{
        optName:String,
        optValue:String
    }],
    brandId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brands"
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        reg:"categories"
    },
    subCategory:String,
    specification:[{
        speName:String,
        speValue:String
    }],
    description:String,
    showInFeatured:Boolean,
    showInLatest:Boolean,
    showInBest:Boolean,
    newp:Boolean,
    offer:Boolean,
    shippingCost:String
});

module.exports = mongoose.model('Product',ProductSchema);