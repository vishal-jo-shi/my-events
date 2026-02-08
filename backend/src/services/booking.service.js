import Booking from "../models/booking.model.js";
import Event from "../models/event.model.js";
import { refundPayment } from "./payment.service.js";

/* CREATE BOOKING */
export const createBooking = async (userId, eventId, quantity) => {
  const event = await Event.findById(eventId);

  if (!event || event.status !== "approved") {
    throw new Error("Event not available for booking");
  }

  if (event.remainingSeats < quantity) {
    throw new Error("Not enough seats available");
  }

  const totalAmount = event.price * quantity;

  // Reserve seats
  event.remainingSeats -= quantity;
  await event.save();

  return Booking.create({
    user: userId,
    event: eventId,
    quantity,
    totalAmount,
    status: "created",
    paymentStatus: "pending",
  });
};

/* CANCEL BOOKING */
export const cancelBooking = async (bookingId, userId) => {
  const booking = await Booking.findOne({
    _id: bookingId,
    user: userId,
  });

  if (!booking) {
    throw new Error("Booking not found or unauthorized");
  }

  if (booking.status === "cancelled") {
    throw new Error("Booking already cancelled");
  }

  // Refund if payment was completed
  if (
    booking.paymentIntentId &&
    booking.paymentStatus === "paid"
  ) {
    await refundPayment(booking.paymentIntentId);
    booking.paymentStatus = "refunded";
  }

  booking.status = "cancelled";

  // Release seats
  await Event.findByIdAndUpdate(booking.event, {
    $inc: { remainingSeats: booking.quantity },
  });

  return booking.save();
};


/* VIEW MY BOOKINGS */
export const getMyBookings = async (userId) => {
  return Booking.find({ user: userId }).populate("event");
};
