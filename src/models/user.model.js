const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    status:{
        type: String,
        enum: ['active','in-active']
    }
})
const userModel = mongoose.model('user', userSchema);
module.exports = userModel