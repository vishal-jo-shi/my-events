import express from "express";
import {
  createBookingController,
  cancelBookingController,
  getMyBookingsController,
} from "../controllers/booking.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorizePermissions } from "../middlewares/role.middleware.js";

const router = express.Router();

/* USER BOOKINGS */
router.post(
  "/",
  isAuthenticated,
  authorizePermissions("CREATE_BOOKING"),
  createBookingController
);

router.get(
  "/me",
  isAuthenticated,
  authorizePermissions("VIEW_OWN_BOOKINGS"),
  getMyBookingsController
);

router.patch(
  "/:id/cancel",
  isAuthenticated,
  authorizePermissions("VIEW_OWN_BOOKINGS"),
  cancelBookingController
);

export default router;
