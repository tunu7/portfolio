const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from the frontend URL
app.use(bodyParser.json()); // Parse JSON requests

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Routes
app.use('/api/projects', projectRoutes); // Project routes
app.use('/api/contact', contactRoutes);   // Contact routes

// Serve static files from React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build'))); // Serve React app files
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // Serve index.html for any other route
  });
}

// Server setup
const PORT = process.env.PORT || 5000; // Define the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log the server status
});
