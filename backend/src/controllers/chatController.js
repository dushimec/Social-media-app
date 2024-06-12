import { createInboxChat, createGroupChat, sendMessage, getMessagesByChatId } from '../services/chatService.js';

export const addInboxChat = async (req, res, next) => {
  try {
    const { userId1, userId2 } = req.body;
    const chat = await createInboxChat(userId1, userId2);
    res.status(201).json(chat);
  } catch (error) {
    next(error);
  }
};

export const addGroupChat = async (req, res, next) => {
  try {
    const { participants, groupName } = req.body;
    const chat = await createGroupChat(participants, groupName);
    res.status(201).json(chat);
  } catch (error) {
    next(error);
  }
};

export const addMessage = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const message = await sendMessage(chatId, req.user._id, req.body.content);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const messages = await getMessagesByChatId(chatId);
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
