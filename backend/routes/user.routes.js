import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/profile", isAuthenticated,getProfile);

export default router;
