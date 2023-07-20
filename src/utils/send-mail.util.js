const nodemailer = require('nodemailer');

const sendMail = async function (to, subject, htmlTemplate) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html: htmlTemplate,
  });
  return info;
};

module.exports = sendMail;
