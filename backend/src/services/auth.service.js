import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/generateToken.js";
import { sendWelcomeEmail } from "../config/mailer.config.js";

export const registerUser = async ({ firstName, lastName, userName, email, password }) => {
  const existingUser = await User.findOne({
    $or: [{ email }, { userName }],
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user=await User.create({
    firstName,
    lastName,
    userName,
    email,
    password: hashedPassword,
  });
  sendWelcomeEmail(user)
};

export const loginUser = async ({ userName, password }) => {
  const user = await User.findOne({ userName }).select("+password");
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  if (user.status !== "active") {
    throw new Error("Account is blocked");
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      role: user.role,
    },
  };
};
