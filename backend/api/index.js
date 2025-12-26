import express from "express";
import dotenv from "dotenv";
import ContactUs from "../Emails/ContactUs.js";
import { sendMail } from "../SendMail.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Health check
app.get("/", (req, res) => {
  res.send("Server working");
});

// Email validation
function isValidEmail(email) {
  if (!email) return false;

  const strictRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return strictRegex.test(email);
}

// API route
app.post("/sendemail", async (req, res) => {
  const { email, message, name } = req.body;

  if (!email || !message || !name) {
    return res
      .status(400)
      .json({ success: false, error: "Please Give Full Data" });
  }

  if (!isValidEmail(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email" });
  }

  const template = ContactUs({ email, message, name });

  try {
    await sendMail({ email, template, name });
    return res.status(200).json({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Failed to send mail",
    });
  }
});

// ❗ IMPORTANT
export default app;
