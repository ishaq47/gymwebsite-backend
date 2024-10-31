const express = require('express');
const router = express.Router();

const {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
} = require('../controllers/memberController');
const { uploadOnMulter } = require('../middleware/multerMiddleware');

// Create Member
router.post('/members', uploadOnMulter.single('photo'), createMember);

// Get All Members
router.get('/members', getAllMembers);

// Get Member by ID
router.get('/members/:id', getMemberById);

// Update Member by ID
router.put('/members/:id', updateMember);

// Delete Member by ID
router.delete('/members/:id', deleteMember);

module.exports = router;
