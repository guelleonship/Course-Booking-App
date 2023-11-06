
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

const router = express.Router();

router.post("/", createCourse);
router.get("/", getAllCourse);
router.get("/:id", getCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);


module.exports = router;