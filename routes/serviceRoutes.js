// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route to get all services
router.get('/services', serviceController.getServices);

// Route to add a new service
router.post('/services', serviceController.addService);

// Route to delete a service by ID
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
