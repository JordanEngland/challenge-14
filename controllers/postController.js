const { Post } = require('../models');

const postController = {
  async create(req, res) {
    try {
      // Extract data from the request body
      const { title, content } = req.body;

      // Create a new blog post in the database
      await Post.create({
        title,
        content,
        UserId: req.session.userId // Associate the post with the logged-in user
      });

      // Redirect the user to the dashboard or another appropriate page
      res.redirect('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = postController;
