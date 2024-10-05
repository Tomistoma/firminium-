const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 5000;

// Configure CORS to allow requests from the React app running on localhost:3000
app.use(cors({
  origin: ['http://localhost:5000', 'http://127.0.0.1:5000'], // Frontend origins
  methods: 'GET, POST', // Allowed HTTP methods
  credentials: true // Allow credentials if needed
}));

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Email sending endpoint
app.post('/send-email', (req, res) => {
  const { name, company, email, phone, need } = req.body;

  // Example email sending logic using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tomas.libertatem@gmail.com',
      pass: 'wcvujcxivjxnzsjb'
    }
  });

  const mailOptions = {
    from: 'tomas.libertatem@gmail.com',
    to: 'tomas.libertatem@gmail.com', // Replace with actual recipient
    subject: `Contact Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="text-align: center; color: #4CAF50;">New Contact Request</h2>
        <hr style="border: 1px solid #ddd; margin-bottom: 20px;">
  
        <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px;"><strong>Company:</strong> ${company}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1E90FF; text-decoration: none;">${email}</a></p>
        <p style="font-size: 16px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1E90FF; text-decoration: none;">${phone}</a></p>
        <p style="font-size: 16px;"><strong>Need:</strong></p>
        <p style="font-size: 16px; background-color: #f1f1f1; padding: 15px; border-radius: 5px;">${need}</p>
  
        <hr style="border: 1px solid #ddd; margin-top: 20px;">
        <p style="text-align: center; font-size: 12px; color: #888;">This email was generated automatically by your website.</p>
      </div>
    `
  };
  

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// If no matching route is found, serve the React app's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
