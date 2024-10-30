// controllers/userController.js
const User = require('../models/User.js');

// Get all subscribers (admin-only)
exports.getAllSubscribers = async (req, res) => {
  const subscribers = await User.find();
  res.json(subscribers);
};

// Add a new subscriber (admin-only)
exports.addSubscriber = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password, role: 'user', subscriptionStatus: 'active' });
  res.status(201).json(user);
};
