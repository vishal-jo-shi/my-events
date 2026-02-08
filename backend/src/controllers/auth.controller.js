import { registerUser, loginUser } from "../services/auth.service.js";

/* ================= REGISTER ================= */
export const registerController = async (req, res) => {
  try {
    console.log(req.body)
    await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Registration Failed:",error.message)
    res.status(400).json({ message: error.message });
  }
};

/* ================= LOGIN ================= */
export const loginController = async (req, res) => {
  try {
    const { token, user } = await loginUser(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

/* ================= LOGOUT ================= */
export const logoutController = (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

/* ================= ME ================= */
export const meController = (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user.id,
      role: req.user.role,
    },
  });
};
