const Student = require("../models/Student");

const createStudent = async (request, response) => {
    try {
     const {firstname, lastname, subjects, age, regNo} = req.body;
     if (!regNo || !lastname || !subjects || !age || !firstname){
     return response.status(401).json("These fields are required");
     }
     const studentObject = {
        firstname,
        lastname,
        subjects,
        regNo,
        age
     };
     const newStudent = new Student(studentObject);
     const saveStudent = await newStudent.save();
     return response.status(201).json("Information saved 😉");
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const allStudent = async (request, response) => {
   try {
    const students = await Student.find();
    response.status(200).json
   } catch (error) {
    res.status(500).json(error.message);
   } 
}

const singleStudent = async (request, response) => {
    try {
        const {id} = request.params;
        const student = await Student.findById(id);
        if (!student){
            return response.status(404).json("student info not found");
        }
        response.status(200).json({message:"student info seen", data:student});
    } catch (error) {
        response.status(500).json(error.message);
    }
}

const updateStudentInfo = async (request, response) => {
    try {
        const updatedStudentInfo = await Post.findByIdAndUpdate(request.params.id, request.body, {new:true});
        if (!updatedStudentInfo) return res.status(404).json("student info not found ");
        response.status(200).json({message: "student updated sucessfully"});
    } catch (error) {
        response.status(500).json(error.message);
    }
};

const deleteStudentInfo = async (request, response) => {
    try {
      const { id } = request.params;
      const deleteInfo = await Post.findByIdAndDelete(id);
      //  check if  post not found
      if (!deleteInfo) return response.status(404).json("post not found");
      response.status(200).json("post deleted succefully");
    } catch (error) {
      response.status(500).json(error.message);
    }
};
module.exports = {createStudent, allStudent, singleStudent, updateStudentInfo, deleteStudentInfo};