import express from 'express';
import { createPost, getPosts, likePost, likePostController, unlikePost, unlikePostController } from '../controllers/postController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const postRoutes = express.Router();

postRoutes.post('/', authenticateUser, createPost);
postRoutes.get('/', getPosts);
postRoutes.post('/:postId/like', authenticateUser, likePostController);
postRoutes.post('/:postId/unlike', authenticateUser, unlikePostController);

export default postRoutes;
