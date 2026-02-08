import express from "express";
import {
  createEventController,
  updateEventController,
  updateEventStatusController,
  listEventsController,
} from "../controllers/event.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorizePermissions } from "../middlewares/role.middleware.js";

const router = express.Router();

/* LIST EVENTS */
router.get("/", isAuthenticated, listEventsController);

/* CREATE EVENT (organizer) */
router.post(
  "/",
  isAuthenticated,
  authorizePermissions("CREATE_EVENT"),
  createEventController
);

/* UPDATE EVENT DETAILS (organizer owns event) */
router.put(
  "/:id",
  isAuthenticated,
  authorizePermissions("UPDATE_OWN_EVENT"),
  updateEventController
);

/* UPDATE EVENT STATUS (publish, unpublish, approve, reject, etc.) */
router.patch(
  "/:id/status",
  isAuthenticated,
  authorizePermissions("UPDATE_OWN_EVENT"),
  updateEventStatusController
);

export default router;
