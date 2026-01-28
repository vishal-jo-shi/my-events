import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { errorHandler } from "./middlewares/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

/* ======================
   App Configuration
====================== */
app.set("trust proxy", 1); // important for cookies & reverse proxies

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

app.use(express.json({ limit: "10kb" })); // prevent large payload attacks
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ======================
   API Routes (Versioned)
====================== */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

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
app.use((req, res, next) => {
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


