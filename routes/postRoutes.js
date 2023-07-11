// routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Create a new blog post
router.post('/posts', postController.create);

module.exports = router;
