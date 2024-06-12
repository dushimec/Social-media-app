import { registerUser, loginUser, verifyEmail } from '../services/authService.js';

export const registerUserController = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const user = await registerUser({ username, email, password });
      res.status(201).json({ message: 'User registered successfully. Please check your email for verification.' });
    } catch (error) {
      next(error);
    }
  };
  
export const verifyEmailController = async (req, res, next) => {
    try {
      const { verificationToken } = req.params;
      await verifyEmail(verificationToken);
      res.redirect('/verified');
    } catch (error) {
      next(error);
    }
  };

export const login = async (req, res, next) => {
  try {
    const { user, token } = await loginUser(req.body);
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};
