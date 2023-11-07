
//import packages
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//to access variables from .env
require('dotenv').config()

//route imports
const course_router = require('./routers/course_routers');
const user_router = require('./routers/user_routers');

//start node app to listen
app.listen("3000", () => {
    console.log(
        `Listening on port 3000`
    );
});

//connect to db
mongoose.connect(process.env.MONGO_URI) //connect mongodb atlas database
    .then(
        console.log("DB Connection successful")
    )
    .catch((error) => {
        console.log(error)
    })

app.use(express.json());

//Route middleware
app.use('/api/courses', course_router);
app.use('/api/users', user_router);