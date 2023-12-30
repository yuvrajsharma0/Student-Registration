const express = require("express");
const studentController = require("../controllers/student");

const router = express.Router();

// route for listing students
router.get("/", studentController.getAllStudents);

// routes for student delete operation
router.get("/:id/delete", studentController.getStudentForDelete);
router.post("/:id/delete", studentController.deleteStudent);

// route for create student
router.get("/create", studentController.getInfoForStudentCreation);
router.post("/create", studentController.createStudent);

module.exports = router;
