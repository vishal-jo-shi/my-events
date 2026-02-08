import {
  blockUser,
  unblockUser,
  approveEvent,
  rejectEvent,
  getSystemStats,
} from "../services/admin.service.js";

/* ================= USERS ================= */

export const blockUserController = async (req, res) => {
  try {
    const user = await blockUser(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const unblockUserController = async (req, res) => {
  try {
    const user = await unblockUser(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= EVENTS ================= */

export const approveEventController = async (req, res) => {
  try {
    const event = await approveEvent(req.params.id);
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const rejectEventController = async (req, res) => {
  try {
    const event = await rejectEvent(req.params.id);
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= DASHBOARD ================= */

export const getDashboardStatsController = async (req, res) => {
  try {
    const stats = await getSystemStats();
    res.status(200).json({ success: true, stats });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};
