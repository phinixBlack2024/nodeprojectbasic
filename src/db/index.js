const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI
const { Database_Name } = require('../constant.js')
const MogoConnection = async () => {
    try {
       const connection = await mongoose.connect(`${mongoUrl}/${Database_Name}`)
        console.log("running")
    } catch (error) {
        console.log(`db/index.js : ${error.message}`)
        process.exit(1);
    }
}

module.exports = MogoConnection

