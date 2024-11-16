const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/BuildNest?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to MongoDB Successfully");
    });
}
module.exports = connectToMongo;