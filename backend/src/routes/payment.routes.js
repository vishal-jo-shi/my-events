import express from "express";
import { createPaymentController } from "../controllers/payment.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/create-intent",
  isAuthenticated,
  createPaymentController
);

export default router;
