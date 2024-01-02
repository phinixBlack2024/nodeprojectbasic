const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js')

router.post('/register', authController.login);
router.post('/login', authController.register);
// router.delete('/delete', userController.deleteUser);
// router.get('/:id', userController.userDetails);

module.exports = router;