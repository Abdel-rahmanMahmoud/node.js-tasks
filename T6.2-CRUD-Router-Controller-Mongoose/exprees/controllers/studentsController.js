import { validationResult } from "express-validator";
// import data from "../data/students.js";
//  let students = [...data];
import Student from "../models/student.js";
import { async } from "./../node_modules/mongodb/src/client-side-encryption/providers/aws";
const formatErrors = (errors) =>
  errors.array().map((error) => ({
    [`error of ${error.path}`]: error.msg,
  }));

const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

const getStudentById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  // const id = parseInt(req.params.id);

  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid student ID" });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createStudent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(201).json(newStudent);
};

const updateStudent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  try {
    const id = req.params.id;
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(updatedStudent);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid student ID" });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  try {
    const id = req.params.id;
    const result = await Student.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
