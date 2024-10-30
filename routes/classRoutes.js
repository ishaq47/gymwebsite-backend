// src/routes/classRoutes.js
const express = require('express');
const { getAllClasses, addClass, deleteClass } = require('../controllers/classController');

const router = express.Router();

router.get('/', getAllClasses);
router.post('/', addClass);
router.delete('/:id', deleteClass);

module.exports = router;
