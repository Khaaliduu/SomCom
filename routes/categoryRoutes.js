import express from 'express';
import { createCategory, getCategories, deleteCategory, getCategoryById, updateCategory } from '../controller/categoryController.js';
const router = express.Router();


// Routes
router.post('/', createCategory);  // POST - Create new category
router.get('/', getCategories);  // GET - Get all categories
router.get('/:id', getCategoryById);  // GET - Get single category by ID
router.put('/:id', updateCategory);  // PUT - Update category by ID
router.delete('/:id', deleteCategory);  // DELETE - Delete category by ID


export default router;
