const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI
console.log(`${mongoUrl}/test`)
const MogoConnection = async () => {
    try {
       const connection = await mongoose.connect(`${mongoUrl}/test`)
        console.log("running")
    } catch (error) {
        console.log(`db/index.js : ${error.message}`)
        process.exit(1);
    }
}

module.exports = MogoConnection

