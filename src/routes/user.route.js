const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js')
router.get('/', userController.list);
router.post('/create', userController.create);
router.put('/edit', userController.edit);
router.delete('/delete', userController.deleteUser);
router.get('/:id', userController.userDetails);

module.exports = router;