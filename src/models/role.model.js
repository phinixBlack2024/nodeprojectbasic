const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ['active','in-active']
    }
})
const roleModel = mongoose.model('role', roleSchema);
module.exports = roleModel