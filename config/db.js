const mongoose  = require("mongoose");
const MONGO_URI = 'mongodb+srv://raghu2662:1234raghu@cluster0.wb5js.mongodb.net/Auth-users?retryWrites=true&w=majority'

const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit();
    }
}

module.exports = connectDb