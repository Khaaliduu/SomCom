import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controller/userController.js';

const router = express.Router();

// Route for creating a user
router.post('/create', createUser);

// Route for getting all users
router.get('/', getAllUsers);

// Route for getting a specific user by ID
router.get('/:id', getUserById);

// Route for updating a specific user by ID
router.put('/:id', updateUser);

// Route for deleting a specific user by ID
router.delete('/:id', deleteUser);

export default router;
