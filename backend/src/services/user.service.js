import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";

/* ================= GET MY PROFILE ================= */
export const getMyProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  if (user.status !== "active") {
    throw new Error("User account is blocked");
  }

  return user;
};

/* ================= UPDATE PROFILE ================= */
export const updateMyProfile = async (userId, data) => {
  const allowedUpdates = ["name", "userName", "email"];

  const updates = {};
  allowedUpdates.forEach((field) => {
    if (data[field]) updates[field] = data[field];
  });

  const user = await User.findByIdAndUpdate(userId, updates, {
    new: true,
    runValidators: true,
  }).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

/* ================= UPDATE PROFILE IMAGE ================= */
/* expects: { url, publicId } coming from frontend */
export const updateProfileImage = async (userId, image) => {
  if (!image?.url || !image?.publicId) {
    throw new Error("Invalid image data");
  }

  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.avatar = image;
  await user.save();

  return {
    avatar: user.avatar,
  };
};

/* ================= CHANGE PASSWORD ================= */
export const changePassword = async (
  userId,
  currentPassword,
  newPassword
) => {
  const user = await User.findById(userId).select("+password");
  if (!user) throw new Error("User not found");

  const isMatch = await comparePassword(currentPassword, user.password);
  if (!isMatch) {
    throw new Error("Current password is incorrect");
  }

  user.password = await hashPassword(newPassword);
  await user.save();

  return true;
};

/* ================= DELETE ACCOUNT (OPTIONAL) ================= */
export const deleteMyAccount = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.status = "blocked"; // soft delete
  await user.save();

  return true;
};
