import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const userRoutes = express.Router();

userRoutes.get('/:userId', authenticateUser, getUserProfile);
userRoutes.put('/:userId', authenticateUser, updateUserProfile);

export default userRoutes;
