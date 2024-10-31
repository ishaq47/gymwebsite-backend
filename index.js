// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/admin');
const blogRoutes =require('./routes/blog')
const serviceRoutes = require('./routes/serviceRoutes')
const classRoutes = require('./routes/classRoutes')
const memberRoutes = require('./routes/memberRoutes');
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/blogs', blogRoutes);
app.use('/api/admin', serviceRoutes);
app.use('/api/classes', classRoutes);
app.use('/uploads', express.static('uploads')); // Serve image uploads
app.use('/api', memberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
