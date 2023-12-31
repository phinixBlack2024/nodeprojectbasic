const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
userName:{
    type:String
}
})
const userModel = mongoose.model('user',userSchema);
module.exports = userModel