const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name:String,
    subCategory:[{
        name:String,
        url:String
    }]
});

module.exports = mongoose.model('category',CategorySchema);