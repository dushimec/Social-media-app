import express from 'express';
import { addInboxChat, addGroupChat, addMessage, getMessages } from '../controllers/chatController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const chatRoutes = express.Router();

chatRoutes.post('/inbox', authenticateUser, addInboxChat);
chatRoutes.post('/group', authenticateUser, addGroupChat);
chatRoutes.post('/:chatId/message', authenticateUser, addMessage);
chatRoutes.get('/:chatId/messages', authenticateUser, getMessages);

export default chatRoutes;
