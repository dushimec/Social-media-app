import express from 'express';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';

import postRoutes from './src/routes/userRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import chatRoutes from './src/routes/chatRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';
import commentRoutes from './src/routes/commentRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);

// Error handler middleware
app.use(errorHandler);

export default app;
