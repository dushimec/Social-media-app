import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

export const createPost = async ({ userId, content, imageUrl }) => {
  const post = await Post.create({ userId, content, imageUrl });
  return post;
};

export const updatePost = async (postId, content, imageUrl) => {
  const post = await Post.findByIdAndUpdate(postId, { content, imageUrl, updatedAt: Date.now() }, { new: true });
  return post;
};

export const deletePost = async (postId) => {
  await Post.findByIdAndDelete(postId);
};

const likePost = async (postId, userId) => {
  const post = await Post.findByIdAndUpdate(
    postId,
    { $addToSet: { likes: userId }, $inc: { likeCount: 1 } },
    { new: true }
  );
  return post;
};

const unlikePost = async (postId, userId) => {
  const post = await Post.findByIdAndUpdate(
    postId,
    { $pull: { likes: userId }, $inc: { likeCount: -1 } },
    { new: true }
  );
  return post;
};

const addCommentToPost = async (postId, userId, content) => {
  const comment = await Comment.create({ postId, userId, content });
  await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id }, $inc: { commentCount: 1 } });
  return comment;
};

export { likePost, unlikePost, addCommentToPost };