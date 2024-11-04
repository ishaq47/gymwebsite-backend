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
const { adminMiddleware } = require('./middleware/adminMiddleware');
const router = require('./routes/loginRoute');
dotenv.config();
connectDB();

const app = express();
app.get('/', (req,res)=>{
    res.send('<h1>Backend Is ready</h1>')
})
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
app.get('/get', adminMiddleware,(req, res) => {
 res.send('heloooo')
})
app.use('/admin', router)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
