import {
  getMyProfile,
  updateMyProfile,
  updateProfileImage,
  changePassword,
  deleteMyAccount,
} from "../services/user.service.js";

/* ================= GET MY PROFILE ================= */
export const getMyProfileController = async (req, res) => {
  try {
    const user = await getMyProfile(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= UPDATE PROFILE ================= */
export const updateMyProfileController = async (req, res) => {
  try {
    const user = await updateMyProfile(req.user.id, req.body);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= UPDATE PROFILE IMAGE ================= */
/* expects { image: { url, publicId } } from frontend */
export const updateProfileImageController = async (req, res) => {
  try {
    const { image } = req.body;

    const result = await updateProfileImage(req.user.id, image);

    res.status(200).json({
      success: true,
      avatar: result.avatar,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= CHANGE PASSWORD ================= */
export const changePasswordController = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    await changePassword(
      req.user.id,
      currentPassword,
      newPassword
    );

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= DELETE ACCOUNT ================= */
export const deleteMyAccountController = async (req, res) => {
  try {
    await deleteMyAccount(req.user.id);

    res.clearCookie("token");

    res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
