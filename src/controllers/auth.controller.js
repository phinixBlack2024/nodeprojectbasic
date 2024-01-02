const userModel = require('../models/user.model.js');
const login = async (req, res) => {
    const listUser = await userModel.find({});
    res.json({ 'users': listUser })
};
const register = async (req, res) => {
    const { userName, email, password, status } = req.body;
    
    const data = { userName: userName, email: email, password: password, status: status }
    const createUser = await userModel.create(data);
    res.json({ 'users': createUser._id })
};

module.exports ={ login, register}