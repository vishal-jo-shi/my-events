import {
  createPaymentIntent,
} from "../services/payment.service.js";

/* CREATE PAYMENT */
export const createPaymentController = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const paymentIntent = await createPaymentIntent(bookingId);

    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("error while making the payment")
    res.status(400).json({ message: error.message });
  }
};
