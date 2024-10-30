// routes/userRoutes.js
const express = require('express');
const { getAllSubscribers, addSubscriber } = require('../controllers/userController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/admin/subscribers', protect, admin, getAllSubscribers);
router.post('/admin/addSubscriber', protect, admin, addSubscriber);

module.exports = router;
