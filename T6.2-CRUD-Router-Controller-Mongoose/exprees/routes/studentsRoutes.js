import express from 'express';
import studentsController from '../controllers/studentsController.js';
import { idParamValidation, createStudentValidation } from '../validations/studentValidation.js';

const route = express.Router();

route.get('/', studentsController.getAllStudents);

route.route('/:id')
  .get(idParamValidation, studentsController.getStudentById)
  .patch(idParamValidation, studentsController.updateStudent)
  .delete(idParamValidation, studentsController.deleteStudent);

route.post('/newStudent', createStudentValidation, studentsController.createStudent);

export default route;
