const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

// Home route
router.get('/', homeController.index);

module.exports = router;
