import {getStripe} from "../config/stripe.config.js";
import User from "../models/user.model.js";
import Booking from "../models/booking.model.js";
import { ensureStripe } from "../utils/stripeHelper.js";
import { sendBookingConfirmationEmail } from "../config/mailer.config.js";

export const stripeWebhookHandler = async (req, res) => {
  const stripe = getStripe();
    ensureStripe(stripe)
    
  const sig = req.headers["stripe-signature"];
  console.log(sig)

  let event;
  

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("🔔 Stripe Event:", event.type);

  const paymentIntent = event.data.object;
  const bookingId = paymentIntent.metadata?.bookingId;

  if (!bookingId) {
    console.warn("No bookingId in metadata");
    return res.json({ received: true });
  }
   /* ✅ PAYMENT SUCCESS */
  if (event.type === "payment_intent.succeeded") {
    const booking = await Booking.findByIdAndUpdate(bookingId, {
      paymentStatus: "paid",
      paymentIntentId: paymentIntent.id,
    });

    console.log("✅ Booking marked as PAID");
     if (booking) {
      const user = await User.findById(booking.user);
      if (user) {
        // ✅ SEND EMAIL ONLY AFTER PAYMENT SUCCESS
        await sendBookingConfirmationEmail(user, booking);
      }
    }
  }

  /* ❌ PAYMENT FAILED */
  if (event.type === "payment_intent.payment_failed") {
    await Booking.findByIdAndUpdate(bookingId, {
      paymentStatus: "failed",
    });

    console.log("❌ Booking payment FAILED");
  }

  /* 💰 REFUND SUCCESS */
  if (event.type === "charge.refunded") {
    await Booking.findByIdAndUpdate(bookingId, {
      paymentStatus: "refunded",
    });

    console.log("💰 Booking REFUNDED");
  }

  res.json({ received: true });
};
