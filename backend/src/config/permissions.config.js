import { ROLES } from "../utils/constant.js";

export const ROLE_PERMISSIONS = {
  [ROLES.USER]: [
    "READ_PROFILE",
    "UPDATE_PROFILE",
    "CREATE_BOOKING",
    "VIEW_OWN_BOOKINGS",
  ],

  [ROLES.ORGANIZER]: [
    "READ_PROFILE",
    "UPDATE_PROFILE",
    "CREATE_EVENT",
    "UPDATE_OWN_EVENT",
    "VIEW_OWN_EVENTS",
  ],

  [ROLES.ADMIN]: [
    "READ_PROFILE",
    "UPDATE_PROFILE",
    "MANAGE_USERS",
    "MANAGE_EVENTS",
    "MANAGE_BOOKINGS",
    "VIEW_ADMIN_DASHBOARD",
    "APPROVE_EVENT",
    "REJECT_EVENT",
  ],
};

export const hasPermission = (role, permission) => {
  return ROLE_PERMISSIONS[role]?.includes(permission);
};
