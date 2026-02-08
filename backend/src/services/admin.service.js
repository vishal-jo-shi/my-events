import User from "../models/user.model.js";
import Event from "../models/event.model.js";
import Booking from "../models/booking.model.js";

/* ================= USERS ================= */

export const blockUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.status = "blocked";
  return user.save();
};

export const unblockUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.status = "active";
  return user.save();
};

/* ================= EVENTS ================= */

export const approveEvent = async (eventId) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");

  event.status = "approved";
  return event.save();
};

export const rejectEvent = async (eventId) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");

  event.status = "draft";
  return event.save();
};

/* ================= SYSTEM STATS ================= */

export const getSystemStats = async () => {
  const totalUsers = await User.countDocuments();
  const totalEvents = await Event.countDocuments();
  const totalBookings = await Booking.countDocuments();

  const totalRevenueAgg = await Booking.aggregate([
    { $match: { paymentStatus: "paid" } },
    { $group: { _id: null, revenue: { $sum: "$totalAmount" } } },
  ]);

  return {
    totalUsers,
    totalEvents,
    totalBookings,
    totalRevenue: totalRevenueAgg[0]?.revenue || 0,
  };
};
