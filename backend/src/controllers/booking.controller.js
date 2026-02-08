import {
  createBooking,
  cancelBooking,
  getMyBookings,
} from "../services/booking.service.js";

/* CREATE */
export const createBookingController = async (req, res) => {
  try {
    const { eventId, quantity } = req.body;

    const booking = await createBooking(
      req.user.id,
      eventId,
      quantity
    );

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* CANCEL */
export const cancelBookingController = async (req, res) => {
  try {
    const booking = await cancelBooking(
      req.params.id,
      req.user.id
    );

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

/* VIEW MY BOOKINGS */
export const getMyBookingsController = async (req, res) => {
  const bookings = await getMyBookings(req.user.id);

  res.status(200).json({
    success: true,
    bookings,
  });
};
