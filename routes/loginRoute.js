const express = require('express');
const { login, register } = require('../controllers/loginController');
const { authMiddlewares, adminMiddleware } = require('../middleware/adminMiddleware');
const router = express.Router();

router.post('/admin-login', login)
router.post('/admin-register', register)

router.get('/admin/dashboard', authMiddlewares, adminMiddleware, (req, res) => {
    res.json({ message: "Welcome to the admin dashboard!" });
});
module.exports = router;