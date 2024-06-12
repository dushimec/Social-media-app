import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

const addComment = async (postId, userId, content) => {
  const comment = await Comment.create({ postId, userId, content });
  await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id }, $inc: { commentCount: 1 } });
  return comment;
};

const replyToComment = async (commentId, userId, content) => {
  const reply = await Comment.create({ postId: null, userId, content, parentCommentId: commentId });
  await Comment.findByIdAndUpdate(commentId, { $push: { replies: reply._id } });
  return reply;
};

const editComment = async (commentId, userId, content) => {
  const comment = await Comment.findOneAndUpdate(
    { _id: commentId, userId },
    { content },
    { new: true }
  );
  return comment;
};

const likeComment = async (commentId, userId) => {
  const comment = await Comment.findByIdAndUpdate(
    commentId,
    { $addToSet: { likes: userId }, $inc: { likeCount: 1 } },
    { new: true }
  );
  return comment;
};

const unlikeComment = async (commentId, userId) => {
  const comment = await Comment.findByIdAndUpdate(
    commentId,
    { $pull: { likes: userId }, $inc: { likeCount: -1 } },
    { new: true }
  );
  return comment;
};

const toggleLikeComment = async (commentId, userId) => {
  const comment = await Comment.findById(commentId);
  const isLiked = comment.likes.includes(userId);

  if (isLiked) {
    return await unlikeComment(commentId, userId);
  } else {
    return await likeComment(commentId, userId);
  }
};

export { addComment, replyToComment, editComment, likeComment, unlikeComment, toggleLikeComment };
