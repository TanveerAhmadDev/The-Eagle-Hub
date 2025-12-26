import nodemailer from "nodemailer";
import AutoReply from "./Emails/AutoReply.js";

export const sendMail = async ({ email, template, name }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD, // App Password
    },
  });

  const options = {
    from: `"${name} via Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_MAIL,
    replyTo: email,
    subject: "Contact Form",
    html: template,
  };

  await transporter.sendMail(options);

  await transporter.sendMail({
    from: `"Support Team" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "We received your message ✔",
    html: AutoReply({ name }),
  });
};
