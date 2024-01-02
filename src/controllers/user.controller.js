const userModel = require('../models/user.model.js');
const { userValidation } = require('../validation/user.validation.js')
const errorResponse = require('../utils/errorResponse.js')

const list = async (req, res) => {
    const listUser = await userModel.find({});
    res.json({ 'users': listUser })
};
const create = async (req, res) => {
    try {
        const { userName, email, password, status } = req.body;
        // const value = await userValidation(req.body)
        // if (value) {
        //     return res.status(400).json(value);
        // }
        const data = { userName: userName, email: email, password: password, status: status }
        const createUser = await userModel.create(data);
        res.json({ 'users': createUser._id })
    } catch (error) {
        return console.error(error.message); // Logs "hello world"
    }
};
const edit = async (req, res) => {
    const { userName, id, email, password, status } = req.body;
    const updateDocument = {
        $set: {
            userName: userName,
            email: email,
            password: password,
            status: status
        },
    };
    const edit = await userModel.updateOne({ _id: id }, updateDocument)
    res.json({ 'users': edit })
};

const deleteUser = async (req, res) => {
    const { id } = req.body;
    const deleteUser = await userModel.findByIdAndDelete(id)
    res.json({ 'users': deleteUser })
}

const userDetails = async (req, res) => {
    const id = req.params.id
    const userDetails = await userModel.findById(id);
    res.json({ 'users': userDetails })
}
module.exports = { list, create, edit, deleteUser, userDetails }