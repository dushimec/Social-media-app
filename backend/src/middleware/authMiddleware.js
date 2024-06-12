import { verifyToken } from '../utils/jwtUtils.js';
import User from '../models/User.js';

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed! Token not provided.' });
    }

    const decodedToken = verifyToken(token);
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed! User not found.' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed! Invalid token.' });
  }
};

export { authenticateUser };
