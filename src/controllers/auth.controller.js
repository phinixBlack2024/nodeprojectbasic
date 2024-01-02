const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const login = async (req, res) => {
    const { email, password } = req.body;
    const listUser = await userModel.findOne({
        email:email
    })
    const match = await bcrypt.compare(password, listUser.password);
    if (!match) {
        return res.json({ message: 'credtional not correct' });
    }
    res.json({ 'users': match })
};
const register = async (req, res) => {
    const { userName, email, password, status } = req.body;
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const data = { userName: userName, email: email, password: hashedPassword, status: status }
    const createUser = await userModel.create(data);
    res.json({ 'users': createUser._id })
};

module.exports = { login, register }