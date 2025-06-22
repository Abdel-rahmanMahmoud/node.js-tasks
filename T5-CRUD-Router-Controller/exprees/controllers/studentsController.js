import { validationResult } from "express-validator";
import data from "../data/students.js";
 let students = [...data];
const formatErrors = (errors) =>
  errors.array().map((error) => ({
    [`error of ${error.path}`]: error.msg,
  }));

const getAllStudents = (req, res) => {
  res.json(students);
};

const getStudentById = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
};

const createStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
};

const updateStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  const id = parseInt(req.params.id);
  let student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // const { name, grade } = req.body;
  // if (name) student.name = name;
  // if (grade) student.grade = grade;
student = { ...student, ...req.body };
  students = students.map((s) => (s.id === id ? student : s));
  res.json(student);
};

const deleteStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(formatErrors(errors));
  }

  const id = parseInt(req.params.id);
  const initialLength = students.length;
  students = students.filter((s) => s.id !== id);

  if (students.length === initialLength) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: "Student deleted" });
};

export default {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
