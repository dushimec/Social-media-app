import express from 'express';
import { editUser, getUser} from '../controllers/userController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';


const userRoutes = express.Router();

userRoutes.get('/:userId', authenticateUser, getUser);
userRoutes.put('/:userId', authenticateUser, editUser);

export default userRoutes;
