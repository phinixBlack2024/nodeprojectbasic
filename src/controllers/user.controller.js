const userModel = require('../models/user.model.js')

const list = async (req, res) => {
    const listUser = await userModel.find({});
    res.json({ 'users': listUser })
};
const create = async (req, res) => {
    const { userName } = req.body;
    const data = { userName: userName }
    const createUser = await userModel.create(data);
    res.json({ 'users': createUser })
};
const edit = async (req, res) => {
    const { userName, id } = req.body;
    const updateDocument = {
        $set: {
            userName: userName,
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