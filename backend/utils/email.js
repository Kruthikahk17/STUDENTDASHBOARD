const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendReminderEmail = async (to, subject, message) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: message,
    });

    console.log("Reminder email sent successfully");
  } catch (error) {
    console.error("Email sending failed:", error.message);
  }
};

module.exports = sendReminderEmail;