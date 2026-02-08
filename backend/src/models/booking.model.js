import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  // Relationships
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  event: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
  },

  // Ticket Info
  quantity: { type: Number, required: true, min: 1 },
  
  // Validation (For on-site check-in)
  isCheckedIn: { type: Boolean, default: false },
  checkedInAt: Date,

  // Payment Tracking
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending"
  },
  paymentIntentId: {
    type: String,
  },

  totalAmount: { type: Number, required: true },
  transactionId: String, // From Stripe, PayPal, etc.

  // Booking Status
  status: {
    type: String,
    enum: ["confirmed", "cancelled", "waitlisted", "created", "checkedIn"],
    default: "created",
  },
  cancellationReason: String,
}, { timestamps: true });

// Indexing for faster lookups (Useful for User Dashboard or Admin Reports)
bookingSchema.index({ userId: 1, eventId: 1 });
bookingSchema.index({ transactionId: 1 });

export default mongoose.Model.Booking || mongoose.model("Booking", bookingSchema);
