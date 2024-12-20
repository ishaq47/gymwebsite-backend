// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const axios = require('axios');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// User signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);
  res.status(201).json({message:"iam a registered", user, token });
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.comparePassword(password))) {
    const token = generateToken(user._id);
    res.json({ user, token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user);
};

// Google login
exports.googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
    const { sub, name, email, picture } = response.data;

    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user if not exists
      user = await User.create({
        name,
        email,
        password: sub, // You can use the Google ID as a placeholder for the password
        googleId: sub,
        profilePicture: picture,
      });
    }

    const token = generateToken(user._id);
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ message: 'Invalid Google ID token' });
  }
};
