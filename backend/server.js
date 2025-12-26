import express from "express";
import dotenv from "dotenv";
import ContactUs from "./Emails/ContactUs.js";
import { sendMail } from "./SendMail.js";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 400;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.get("/", (req, res) => {
  res.send("Server working");
});

function isValidEmail(email) {
  if (!email) return false;

  // Strict RFC 5322-compliant regex
  const strictRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return strictRegex.test(email);
}

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
    const info = await sendMail({ email, template, name });
    console.log("Email sent");
    res
      .status(200)
      .json({ success: true, message: "Mail is sending to indox" });
  } catch (err) {
    console.log("Email not sent");
    res
      .status(500)
      .json({
        success: false,
        error: err.message,
        message: "Filed to send Mail to indox",
      });
  }
});

app.listen(port, () => {
  console.log(`Server is Listning on: http://localhost:${port}`);
});
