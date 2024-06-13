import express from 'express';

import { authenticateUser } from '../middleware/authMiddleware.js';
import { addComment, addCommentController, editComment, editCommentController, likeCommentController, replyToCommentController, unlikeCommentController } from '../controllers/commentController.js';

const commentRoutes = express.Router();

commentRoutes.post('/:postId/comments', authenticateUser, addCommentController);
commentRoutes.put('/comments/:commentId', authenticateUser, editCommentController);
commentRoutes.post('/comments/:commentId/like', authenticateUser, likeCommentController);
commentRoutes.post('/comments/:commentId/unlike', authenticateUser, unlikeCommentController);
commentRoutes.post('/comments/:commentId/reply', authenticateUser, replyToCommentController);

export default commentRoutes;
