const User = require('../models/user_model');

//import bcrypt
const bcrypt = require('bcrypt');

//import json webtoken
const jwt = require('jsonwebtoken');

//to access variables from .env
require('dotenv').config()


//user signing up
const user_signup = async (req, res) => {
    const { username, password } = req.body;

    try {

        //checks if username is existing
        const existing_user = await User.findOne({ username: username });

        if (existing_user) {
            return res.status(400).json({ error: "Username already existing." })
        }

        //enrypt password
        const hashed_password = await bcrypt.hash(password, 10);

        //creating new user
        const new_user = await User.create({ username, password: hashed_password });
        res.status(200).json(new_user);

    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}


//user login
const user_login = async (req, res) => {

    try {

        //checks whether the user is in the record
        const existing_user = await User.findOne({username: req.body.username});

        if(!existing_user){
            return res.status(404).json({ error: "User not found" });
        }

        //checks whether password inputted is valid
        const does_password_match = await bcrypt.compare(req.body.password, existing_user.password)

        if(!does_password_match) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({userId: existing_user._id}, process.env.JWT_SECRET,{expiresIn: '2h'});
        res.status(200).json(token);

    } catch(error) {

        res.status(400).json({ error: error.message });

    }

}


//exporting module
module.exports = {
    user_signup,
    user_login
}