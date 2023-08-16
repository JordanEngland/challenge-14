// controllers/commentController.js
const { Comment } = require('./models');

const commentController = {
  async create(req, res) {
    try {
      // Extract data from the request body
      const { postId, content } = req.body;

      // Create a new comment in the database
      const comment = await Comment.create({
        content,
        PostId: postId,
        UserId: req.session.userId // Associate the comment with the logged-in user
      });

      // Redirect the user back to the blog post page or another appropriate page
      res.redirect(`/posts/${postId}`);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = commentController;
