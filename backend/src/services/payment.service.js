import {getStripe} from "../config/stripe.config.js";
import Booking from "../models/booking.model.js";
import { ensureStripe } from "../utils/stripeHelper.js";

/* CREATE PAYMENT INTENT */
export const createPaymentIntent = async (bookingId) => {
  const stripe = getStripe();
  ensureStripe(stripe);

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    throw new Error("Booking not found");
  }

  // 🔐 Payment already finished
  if (booking.paymentStatus === "paid") {
    throw new Error("Booking already paid");
  }

  // 🔁 Reuse existing PaymentIntent
  if (booking.paymentIntentId) {
    try {
      const existingIntent = await stripe.paymentIntents.retrieve(
        booking.paymentIntentId
      );

      // If intent is still usable, return it
      if (
        existingIntent.status === "requires_payment_method" ||
        existingIntent.status === "requires_confirmation" ||
        existingIntent.status === "requires_action"
      ) {
        return existingIntent;
      }

      // If intent already succeeded, do nothing
      if (existingIntent.status === "succeeded") {
        throw new Error("Payment already completed");
      }

      // Otherwise, allow creating a new one
    } catch (err) {
      console.warn(
        "⚠️ Failed to retrieve PaymentIntent, creating new one",
        err.message
      );
    }
  }

  // 🆕 Create new PaymentIntent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: booking.totalAmount * 100,
    currency: "inr",
    metadata: {
      bookingId: booking._id.toString(),
      userId: booking.user.toString(),
    },
    automatic_payment_methods: { enabled: true },
  });

  booking.paymentIntentId = paymentIntent.id;
  booking.paymentStatus = "pending";
  await booking.save();

  return paymentIntent;
};

/* REFUND PAYMENT */
export const refundPayment = async (paymentIntentId) => {
  const stripe = getStripe();
  ensureStripe(stripe);
  return stripe.refunds.create({
    payment_intent: paymentIntentId,
  });
};
