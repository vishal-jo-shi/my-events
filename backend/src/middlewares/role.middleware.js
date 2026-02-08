import { hasPermission } from "../config/permissions.config.js";

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied: insufficient role",
      });
    }
    next();
  };
};

export const authorizePermissions = (permission) => {
  return (req, res, next) => {
    const { role } = req.user;

    if (!hasPermission(role, permission)) {
      return res.status(403).json({
        message: "Access denied: insufficient permission",
      });
    }

    next();
  };
};