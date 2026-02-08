import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    // console.log("cookies:", req.cookies);

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
     // 🔥 THIS IS THE IMPORTANT PART
    if (error.name === "TokenExpiredError") {
      res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: false, // true in production
      });

      return res.status(401).json({ message: "Session expired" });
    }
    return res.status(401).json({ message: "Invalid token" });
  }
};



// export const authorize = (requiredPermission) => {
//   return (req, res, next) => {
//     try {
//       const role = req.user?.role;

//       if (!role || !permissions[role]) {
//         return res.status(403).json({ message: "Access denied" });
//       }

//       if (!permissions[role].includes(requiredPermission)) {
//         return res.status(403).json({ message: "Forbidden" });
//       }

//       next();
//     } catch (error) {
//       return res.status(500).json({ message: "Authorization error" });
//     }
//   };
// };

// // Ownership Check (Organizer → Own Event Only)
// export const canManageEvent = async (req, res, next) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     if (
//       req.user.role === "admin" ||
//       event.organizerId.toString() === req.user.id
//     ) {
//       return next();
//     }

//     return res.status(403).json({ message: "Not allowed" });
//   } catch (error) {
//     return res.status(500).json({ message: "Event permission check failed" });
//   }
// };
