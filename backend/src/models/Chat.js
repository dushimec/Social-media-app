import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  isGroup: { type: Boolean, default: false },
  groupName: { type: String }
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
