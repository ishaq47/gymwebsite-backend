// routes/authRoutes.js
const express = require('express');
const { signup, login, getProfile } = require('../controllers/authController.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/',(req, res) => {res.send("Welcome")})
router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getProfile);

module.exports = router;
