const mongoose = require('mongoose');

const UserAdminSchema = mongoose.Schema({
    mobile:String,
    password:String,
    createAt:String,
    name:String,
    pic:String
});

module.exports = mongoose.model("UserAdmin",UserAdminSchema);