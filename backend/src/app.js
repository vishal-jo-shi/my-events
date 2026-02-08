import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { errorHandler } from "./middlewares/error.middleware.js";
import { stripeWebhookHandler } from "./webhooks/stripe.webhook.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import eventRoutes from "./routes/event.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import adminRoutes from "./routes/admin.routes.js"
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

/* ======================
   App Configuration
====================== */
app.set("trust proxy", 1);

/* ======================
   STRIPE WEBHOOK (RAW BODY)
   ⚠️ MUST COME BEFORE express.json()
====================== */
app.post(
  "/api/webhooks/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhookHandler
);

/* ======================
   Global Middlewares
====================== */
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ======================
   API Routes
====================== */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/payment", paymentRoutes);

/* ======================
   Health Check
====================== */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

/* ======================
   404 Handler
====================== */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ======================
   Global Error Handler
====================== */
app.use(errorHandler);

export default app;
