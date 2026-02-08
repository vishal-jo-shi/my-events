import express from "express";
import {
  getMyProfileController,
  updateMyProfileController,
  updateProfileImageController,
  changePasswordController,
  deleteMyAccountController,
} from "../controllers/user.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* ================= USER ROUTES ================= */

router.get("/me", isAuthenticated, getMyProfileController);

router.put("/me", isAuthenticated, updateMyProfileController);

router.patch(
  "/me/avatar",
  isAuthenticated,
  updateProfileImageController
);

router.patch(
  "/me/change-password",
  isAuthenticated,
  changePasswordController
);

router.delete(
  "/me",
  isAuthenticated,
  deleteMyAccountController
);

export default router;
