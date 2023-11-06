
const Course = require("../models/course_model");


//create a course
const createCourse = async (req, res) => {

    const { title, description, instructor, duration, availableSlots } = req.body;

    try {
        const course = await Course.create(
            {
                title,
                description,
                instructor,
                duration,
                availableSlots
            }
        );
        res.status(200).json({ message: "Course Created!" })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//view all course
const getAllCourse = async (req, res) => {
    try {

        const course = await Course.find();
        res.status(200).json(course);

    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}


//view one course
const getCourse = async (req, res) => {

    const { id } = req.params;

    try {

        const course = await Course.findById(id);
        res.status(200).json(course);

    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}


//update course
const updateCourse = async (req, res) => {

    const { id } = req.params;

    try {

        const course = await Course.findByIdAndUpdate({ _id: id }, { ...req.body });
        res.status(200).json({ message: "Course successfully updated!" });

    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}


//delete a course 
const deleteCourse = async (req, res) => {

    const { id } = req.params;

    try {

        const course = await Course.findOneAndDelete({ _id: id });
        res.status(200).json({ message: "The course has been successfully removed." });

    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}


//export module
module.exports = {
    createCourse,
    getAllCourse,
    getCourse,
    updateCourse,
    deleteCourse
}