import express from 'express';


import { login, registerUserController } from '../controllers/authController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerUserController);
authRoutes.post('/login', login);
authRoutes.get('/me', authenticateUser);

export default authRoutes;
