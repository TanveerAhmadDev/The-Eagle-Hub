import express from "express";
import ContactUs from "./Emails/ContactUs.js";
import { sendMail } from "./SendMail.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://the-eagle-hub.vercel.app",
  })
);

function isValidEmail(email) {
  if (!email) return false;

  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

app.get("/", (req, res) => {
  res.json({ message: "Backend is working on Vercel!" });
});

app.post("/sendemail", async (req, res) => {
  const { email, message, name } = req.body;

  if (!email || !message || !name) {
    return res
      .status(400)
      .json({ success: false, error: "Please Give Full Data" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: "Invalid email" });
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

export default app;
