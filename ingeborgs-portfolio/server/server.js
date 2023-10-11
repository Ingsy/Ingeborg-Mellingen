require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

// Set up your express app and body parser here

const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // Hotmail (Outlook) SMTP server
    port: 587, // Port for secure SMTP (TLS)
    secure: false, // Use TLS (true for 465, false for other ports)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Your Hotmail (Outlook) email address
        to: process.env.EMAIL_USER,
        subject: `Message from ${name}`,
        text: message,
    };

    // Send the email using Nodemailer
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false });
        } else {
            console.log(`Email sent: ${info.response}`);
            res.json({ success: true });
        }
    });
});

// Start your express app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
