import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/generateToken.js";

export const registerController = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { userName }]
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      name,
      userName,
      email,
      password: hashedPassword
    });

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error_message:error
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    if (user.status !== "active") {
      return res.status(403).json({ message: `Account is ${user.status}` });
    }
    generateToken(res, user);

    res.json({
      success: true,
      user: { id: user._id, role: user.role }
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
    });
  }
};

export const logoutController = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Logout failed",
    });
  }
};

export const meController = (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user.id,
      role: req.user.role,
    },
  });
};
