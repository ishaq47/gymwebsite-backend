const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
} = require('../controllers/memberController');

// Create Member
router.post('/members', upload.single('photo'), createMember);

// Get All Members
router.get('/members', getAllMembers);

// Get Member by ID
router.get('/members/:id', getMemberById);

// Update Member by ID
router.put('/members/:id', updateMember);

// Delete Member by ID
router.delete('/members/:id', deleteMember);

module.exports = router;
