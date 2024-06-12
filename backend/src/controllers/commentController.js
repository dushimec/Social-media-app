import {
  addComment,
  replyToComment,
  editComment,
  likeComment,
  unlikeComment,
  toggleLikeComment
} from '../services/commentService.js';

const addCommentController = async (req, res, next) => {
  try {
    const { postId, content } = req.body;
    const comment = await addComment(postId, req.user._id, content);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

const replyToCommentController = async (req, res, next) => {
  try {
    const { commentId, content } = req.body;
    const reply = await replyToComment(commentId, req.user._id, content);
    res.status(201).json(reply);
  } catch (error) {
    next(error);
  }
};

const editCommentController = async (req, res, next) => {
  try {
    const { commentId, content } = req.body;
    const comment = await editComment(commentId, req.user._id, content);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

const likeCommentController = async (req, res, next) => {
  try {
    const { commentId } = req.body;
    const comment = await likeComment(commentId, req.user._id);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

const unlikeCommentController = async (req, res, next) => {
  try {
    const { commentId } = req.body;
    const comment = await unlikeComment(commentId, req.user._id);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

const toggleLikeCommentController = async (req, res, next) => {
  try {
    const { commentId } = req.body;
    const comment = await toggleLikeComment(commentId, req.user._id);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

export {
  addCommentController,
  replyToCommentController,
  editCommentController,
  likeCommentController,
  unlikeCommentController,
  toggleLikeCommentController
};
