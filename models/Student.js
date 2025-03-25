const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  subjects: [String],
  parentName: String,
  age: Number,
  dateOB: String,
  phoneNumber: String,
  class: String,
  regNo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Student", StudentSchema);
