const AdminUser = require("../models/LoginSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new AdminUser({ username, email, password: hashedPassword, isAdmin });
  await newUser.save();
  res.status(201).send('User registered');
}
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await AdminUser.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}
module.exports = { login, register }