import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { JWT_SECRET } from '../config/config.js';
import { sendEmail } from '../utils/emailUtils.js';

export const registerUser = async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
  
    const verificationToken = generateVerificationToken();
    user.verificationToken = verificationToken;
    await user.save();
    await sendVerificationEmail(user.email, verificationToken);
  
    return user;
  };
  
  export const verifyEmail = async (verificationToken) => {
    const user = await User.findOne({ verificationToken });
    if (!user) {
      throw new Error('Invalid verification token.');
    }
    user.isEmailVerified = true;
    user.verificationToken = null;
    await user.save();
    return user;
  };
  
export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  return { user, token };
};
