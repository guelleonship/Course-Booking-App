//import json webtoken
const jwt = require('jsonwebtoken');

//to access variables from .env
require('dotenv').config()

const auth_middleware = (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        res.status(403).json({ error: "Access Denied" });
    }

    try {

        const decoded = jwt.verify(token.substring(7), process.env.JWT_SECRET);
        req.user = { userId: decoded.id }

        next();

    } catch (error) {

        res.status(400).json({ error: error.message });

    }

}

module.exports = auth_middleware;