import { authorizePermissions } from "../middlewares/role.middleware.js";

router.post(
  "/events",
  authenticateUser,
  authorizePermissions("CREATE_EVENT"),
  createEventController
);
