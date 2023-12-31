const userModel = require('../models/user.model.js')

const list = async (req,res) =>{
    const listUser = await userModel.find({});
res.json({'he':listUser})
}

module.exports = {list}