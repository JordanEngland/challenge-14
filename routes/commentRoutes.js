// routes/commentRoutes.js
const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Create a new comment
router.post('/comments', commentController.create);

module.exports = router;
