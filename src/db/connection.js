const mongoose = require("mongoose")
// console.log(process.env.MONGO_URI)

const connection = async () => {

    try {
        await mongoose.connect (
            // "mongodb+srv://citimesh:oyfUhJfP6MngY7i1@cluster0.dmqqcpq.mongodb.net/week7?retryWrites=true&w=majority"
            process.env.MONGO_URI       //<----this replaces the line above
        )
    } catch (error) {
        console.log(error)
    }
        
        console.log("DB connection established")

    }
    
    connection ()

    // module.exports=connection






   