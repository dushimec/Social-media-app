import Chat from '../models/Chat.js';
import Message from '../models/Message.js';

export const createInboxChat = async (userId1, userId2) => {
  const chat = await Chat.create({ participants: [userId1, userId2], isGroup: false });
  return chat;
};

export const createGroupChat = async (participants, groupName) => {
  const chat = await Chat.create({ participants, groupName, isGroup: true });
  return chat;
};

export const sendMessage = async (chatId, userId, content) => {
  const message = await Message.create({ chatId, userId, content });
  const chat = await Chat.findById(chatId);
  chat.messages.push(message);
  await chat.save();
  return message;
};

export const getMessagesByChatId = async (chatId) => {
  const chat = await Chat.findById(chatId).populate('messages');
  return chat.messages;
};
