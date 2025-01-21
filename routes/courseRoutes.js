import express from 'express';
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from '../controller/courseController.js';

const router = express.Router();

// Route definitions
router.route('/').post(createCourse).get(getCourses);
router
  .route('/:id')
  .get(getCourseById)
  .put(updateCourse)
  .delete(deleteCourse);

export default router;
