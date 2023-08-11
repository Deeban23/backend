const nodemailer = require("nodemailer");

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email service provider (e.g., Gmail, Outlook, etc.)
  auth: {
    user: "deebanpari@gmail.com", // Replace with your email address
    pass: "khvsvovmmlmkrfno", // Replace with your email password or app-specific password
  },
});

// Function to send registration success email
function sendRegistrationEmail(email) {
  const mailOptions = {
    from: "deebanpari@gmail.com", // Replace with your email address
    to: email,
    subject: "Welcome to our Application",
    text: "Thank you for registering! Welcome to our application.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = {
  sendRegistrationEmail,
};
