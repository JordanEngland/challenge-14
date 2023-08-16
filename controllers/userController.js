const { User } = require('./models/user');

const userController = {
  async register(req, res) {
    try {
      // Extract data from the request body
      const { username, password } = req.body;

      // Create a new user in the database
      await User.create({ username, password });

      // Redirect the user to the login page or another appropriate page
      res.redirect('/login');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = userController;
