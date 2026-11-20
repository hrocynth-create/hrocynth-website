
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";
import { z } from "zod";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Check required environment variables
const requiredEnv = [
  "RESEND_API_KEY",
  "TO_EMAIL",
  "FROM_EMAIL",
  "FRONTEND_URL",
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(`Missing environment variable: ${key}`);
    process.exit(1);
  }
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Security middleware
app.use(helmet());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json({ limit: "10kb" }));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many enquiries. Please try again later.",
  },
});

// Contact form validation
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(150).optional(),
  interest: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000),
});

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hrocynth API is running.",
  });
});

// Contact API
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Please check your form details.",
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const {
      name,
      email,
      company,
      interest,
      message,
    } = parsed.data;

    console.log("New contact enquiry received:", {
      name,
      email,
      interest,
    });

    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.TO_EMAIL],
      replyTo: email,
      subject: `New Hrocynth Website Enquiry - ${interest}`,
      text: `
    Name: ${name}
    Email: ${email}
    Company: ${company || "Not provided"}
    Interest: ${interest}

    Message:
    ${message}
      `,
    });

    // Detailed backend error logging
    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(502).json({
        success: false,
        message: "Email delivery failed. Please check the backend configuration.",
      });
    }

    console.log("EMAIL SENT SUCCESSFULLY:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log("HROCYNTH BACKEND STARTED");
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Email recipient: ${process.env.TO_EMAIL}`);
  console.log("--------------------------------");
});
