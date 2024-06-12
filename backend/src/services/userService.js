import User from '../models/User.js';

export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

export const updateUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  return user;
};

export const deleteUser = async (userId) => {
  await User.findByIdAndDelete(userId);
};
