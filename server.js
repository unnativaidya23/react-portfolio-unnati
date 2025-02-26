const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Allow CORS for Vite running on port 5173
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(bodyParser.json());

// Route to handle email sending
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'unnati.vaidya23@gmail.com', // Your Gmail
      pass: 'Unnativaidya@4', // Your regular Gmail password
    },
  });

  const mailOptions = {
    from: email,
    to: 'unnati.vaidya23@gmail.com', // Your Gmail as the recipient
    subject: `Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ error: 'Failed to send message' });
    }
    res.status(200).send({ success: 'Message sent successfully' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
