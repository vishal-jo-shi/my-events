import express from "express";
import {
  blockUserController,
  unblockUserController,
  approveEventController,
  rejectEventController,
  getDashboardStatsController,
} from "../controllers/admin.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { ROLES } from "../utils/constant.js";

const router = express.Router();

/* ALL ADMIN ROUTES */
router.use(isAuthenticated, authorizeRoles(ROLES.ADMIN));

/* DASHBOARD */
router.get("/dashboard", getDashboardStatsController);

/* USERS */
router.patch("/users/:id/block", blockUserController);
router.patch("/users/:id/unblock", unblockUserController);

/* EVENTS */
router.patch("/events/:id/approve", approveEventController);
router.patch("/events/:id/reject", rejectEventController);

export default router;
