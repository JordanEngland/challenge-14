// controllers/homeController.js
const { Post } = require('./models/post');

const homeController = {
  async index(req, res) {
    try {
      // Fetch all blog posts from the database
      const posts = await Post.findAll();

      // Render the homepage template with the blog posts
      res.render('home', { posts });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = homeController;
