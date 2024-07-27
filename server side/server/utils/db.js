const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/mern-learning"
// mongoose.connect(URI);

const URI = process.env.MONGOURI;
const connectDB = async() =>{
    try {
        await mongoose.connect(URI)
        console.log("connection successfull to db")
    } catch (error) {
        console.log("connection error to db")
        process.exit(0);
    }
}


module.exports = connectDB