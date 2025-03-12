// import express from 'express';
// import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from "../controller/courseController.js";

// const router = express.Router();

// // Routes for courses
// router.route('/').get(getCourses).post(createCourse);
// router.route('/:id').get(getCourseById).put(updateCourse).delete(deleteCourse);

// export default router

import express from 'express';
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse, getCoursesByUser } from "../controller/courseController.js";

const router = express.Router();

// Routes for courses
router.route('/').get(getCourses).post(createCourse);
router.route('/:id').get(getCourseById).put(updateCourse).delete(deleteCourse);
router.route('/user/:id').get(getCoursesByUser); // ✅ Add this route

export default router;
