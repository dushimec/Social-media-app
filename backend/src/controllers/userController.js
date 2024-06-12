import { getUserById, updateUser, deleteUser } from '../services/userService.js';

export const getUser = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const editUser = async (req, res, next) => {
  try {
    const user = await updateUser(req.params.userId, req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const removeUser = async (req, res, next) => {
  try {
    await deleteUser(req.params.userId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
