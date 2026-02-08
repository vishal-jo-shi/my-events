import nodemailer from "nodemailer";

/* ================= TRANSPORT ================= */

const getTransporter = ()=>{
let transporter;

try {

  transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: Number(process.env.MAIL_PORT) === 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  return transporter;
} catch (error) {
  console.error("❌ Failed to create mail transporter:", error.message);
}
}

/* ================= BASE SEND ================= */

const sendEmail = async ({ to, subject, html }) => {
    const transporter=getTransporter();
  if (!transporter) {
    console.error("❌ Mail transporter not initialized");
    return;
  }
  try {
    await transporter.sendMail({
      from: `"Team My Events" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
  }
};

/* ================= EMAIL TEMPLATES ================= */

/* WELCOME EMAIL */
export const sendWelcomeEmail = async (user) => {
  try {
    await sendEmail({
      to: user.email,
      subject: "Welcome to My Events 🎉",
      html: `
        <h2>Welcome, ${user.firstName}!</h2>
        <p>Your account has been created successfully.</p>
        <p>Start exploring events and book your favorites.</p>
      `,
    });
  } catch (error) {
    console.error("❌ Welcome email error:", error.message);
  }
};

/* BOOKING CONFIRMATION */
export const sendBookingConfirmationEmail = async (user, booking) => {
  try {
    await sendEmail({
      to: user.email,
      subject: "Booking Confirmed 🎟️",
      html: `
        <h2>Booking Confirmed</h2>
        <p>Your booking has been successfully confirmed.</p>
        <p><strong>Event:</strong> ${booking.event.title}</p>
        <p><strong>Ticket Quantity:</strong> ${booking.quantity}</p>
        <p><strong>Total Amount:</strong> ₹${booking.totalAmount}</p>
      `,
    });
  } catch (error) {
    console.error("❌ Booking email error:", error.message);
  }
};

/* PASSWORD RESET */
export const sendPasswordResetEmail = async (user, resetToken) => {
  try {
    const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendEmail({
      to: user.email,
      subject: "Reset Your Password 🔐",
      html: `
        <h2>Password Reset</h2>
        <p>You requested a password reset.</p>
        <p>Click below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link will expire in 15 minutes.</p>
      `,
    });
  } catch (error) {
    console.error("❌ Password reset email error:", error.message);
  }
};
