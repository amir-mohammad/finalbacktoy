const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURL');

const connectDB = () =>{
    mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    },() =>{
        try {
            console.log("DB is Connected");
            return true
        } catch (error) {
            console.log("DB is not Connected");
            process.exit(1);
            return false;
        }
    })
}

module.exports = connectDB;