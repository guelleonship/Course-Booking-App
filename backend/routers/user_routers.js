
//To use express related-functionality.
const express = require('express');

//Access router methods
const router = express.Router();

//Import User controller
const {
    user_signup,
    user_login
} = require('../controllers/user_controller');

//create new user
router.post('/register', user_signup);

//login user
router.post('/login', user_login);


module.exports = router;