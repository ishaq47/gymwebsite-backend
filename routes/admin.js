const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const Blog = require('../models/Blog');
const Service = require('../models/Service');
const { adminMiddleware } = require('../middleware/adminMiddleware');


// Dashboard Summary API
router.get('/dashboard-summary', adminMiddleware, async (req, res) => {
  try {
    // Fetch counts for each collection
    const totalMembers = await Member.countDocuments();
    const totalBlogs = await Blog.countDocuments();
    const totalServices = await Service.countDocuments();

    // Fetch active and inactive subscribers
    const activeMembers = await Member.countDocuments({ active: true });
    const inactiveMembers = await Member.countDocuments({ active: false });

    // Return summary
    res.json({
      members: totalMembers,
      activeMembers,
      inactiveMembers,
      blogs: totalBlogs,
      services: totalServices
    });
  } catch (error) {
    console.error('Error fetching dashboard summary:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
