const express = require("express");
const {createStudent, allStudent, singleStudent, updateStudentInfo, deleteStudentInfo} = require("../controllers/studentcontroller");

const router = express.Router();

router.post("/api/create-student", createStudent);
router.get("/api/all-Students", allStudent);
router.get("/api/single-Student:id", singleStudent);
router.put("/api/update-info", updateStudentInfo);
router.delete("/api/delete-info", deleteStudentInfo);




module.exports = router;