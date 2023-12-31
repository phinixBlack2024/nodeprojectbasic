const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js')
router.get('/',userController.list );

module.exports = router;