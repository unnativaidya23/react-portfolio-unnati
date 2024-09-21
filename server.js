import nodemailer from 'nodemailer';

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service
  auth: {
    user: 'unnati.vaidya23@vit.edu', // Your Gmail address
    pass: '932304' // Your Gmail password or app password if 2FA is enabled
  }
});

// Define email options
const mailOptions = {
  from: 'unnati.vaidya23@vit.edu',
  to: 'unnati2004vaidya@gmail.com',
  subject: 'Subject of your email',
  text: 'Hello world!',
  html: '<b>Hello world!</b>'
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
