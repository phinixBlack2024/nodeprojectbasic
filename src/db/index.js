const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI;
const mongoUrlLocal = process.env.MONGODB_URI_LOCAl;
const MONGOENV = process.env.MONGOENV
const { Database_Name } = require('../constant.js')
const Mongo_Url = MONGOENV == 'local' ? mongoUrlLocal:mongoUrl
const MogoConnection = async () => {
    try {
       const connection = await mongoose.connect(`${Mongo_Url}/${Database_Name}`)
        console.log("running")
    } catch (error) {
        console.log(`db/index.js : ${error.message}`)
        process.exit(1);
    }
}

module.exports = MogoConnection

