import express from "express";
import {
  registerController,
  loginController,
  logoutController,
  meController,
} from "../controllers/auth.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();
//   /api/auth/register
router.post("/register", registerController);

//   /api/auth/login
router.post("/login", loginController);

//   /api/auth/logout
router.post("/logout", isAuthenticated,logoutController);

//  /api/auth/me
router.get("/me", isAuthenticated, meController);


export default router;
