import { createPost, updatePost, deletePost, likePost, unlikePost } from '../services/postService.js';

export const addPost = async (req, res, next) => {
  try {
    const post = await createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const editPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await updatePost(postId, req.body.content, req.body.imageUrl);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export const removePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    await deletePost(postId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const likePostController = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const post = await likePost(postId, req.user._id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const unlikePostController = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const post = await unlikePost(postId, req.user._id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const addCommentToPostController = async (req, res, next) => {
  try {
    const { postId, content } = req.body;
    const comment = await addCommentToPost(postId, req.user._id, content);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

export { likePostController, unlikePostController, addCommentToPostController };
