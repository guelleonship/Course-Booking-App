
//To use express related-functionality.
const express = require('express');

//Imported functions from controller.js module.
const {
    createCourse,
    getAllCourse,
    getCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/course_controller');

const auth_middleware = require("../middleware/auth_middleware")

const router = express.Router();

router.post("/", auth_middleware, createCourse);
router.get("/", getAllCourse);
router.get("/:id", getCourse);
router.put("/:id", auth_middleware, updateCourse);
router.delete("/:id", auth_middleware, deleteCourse);



module.exports = router;