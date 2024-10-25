// server/routes/contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create a Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail service for sending emails
    auth: {
        user: 'tunudoley7@gmail.com', // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
});

// POST a new contact inquiry
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate incoming data
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please provide all required fields: name, email, and message.' });
    }

    // Email options
    const mailOptions = {
        from: email, // Sender's email address
        to: 'tunudoley7@gmail.com', // Recipient's email address
        subject: `New Contact Form Submission from ${name}`, // Subject of the email
        text: message, // Plain text version of the message
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // HTML version of the message
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        // Return a success response
        res.status(200).json({ message: 'Your message has been sent successfully. We will get back to you shortly.' });
    } catch (error) {
        console.error("Error sending email:", error);
        // Return an error response with more information
        res.status(500).json({ message: 'An error occurred while sending your message. Please try again later.' });
    }
});

// Export the router
module.exports = router;
