// routes/authRoutes.js
const express = require('express');
const { signup, login, getProfile, facebookLogin } = require('../controllers/authController.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/auth/facebook', facebookLogin); // Add this route
router.get('/profile', protect, getProfile);

module.exports = router;
