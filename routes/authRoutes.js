const express = require('express')
const { registerController, loginController, logoutController } = require('../controllers/authControlleres')

//router object
const router =express.Router();

//routes
//register
router.post('/Register',registerController);

//login
router.post('/login',loginController);

//logout
router.post('/logout',logoutController);

module.exports = router;