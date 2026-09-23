const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body); // Add this line
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'andreiespina016@gmail.com',
      pass: 'bnzb cayl zuuc zqai',
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'andreiespina016@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: 'Message sent successfully!' });
 } catch (err) {
    console.log('Email error:', err); // <-- Add this line
    res.status(500).json({ message: 'Failed to send message.', error: err });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));