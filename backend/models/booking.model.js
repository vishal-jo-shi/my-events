import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  // Relationships
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  eventId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
  },

  // Ticket Info
  ticketCount: { type: Number, required: true, min: 1 },
  ticketType: { 
    type: String, 
    enum: ["General", "VIP", "EarlyBird"], 
    default: "General" 
  },
  seats: [String], // Array for specific seat numbers (e.g., ["A1", "A2"])
  
  // Validation (For on-site check-in)
  qrCode: String, // Store URL or base64 of the QR code
  isCheckedIn: { type: Boolean, default: false },
  checkedInAt: Date,

  // Payment Tracking
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Failed", "Refunded"],
    default: "Pending"
  },
  totalAmount: { type: Number, required: true },
  transactionId: String, // From Stripe, PayPal, etc.

  // Booking Status
  status: {
    type: String,
    enum: ["Confirmed", "Cancelled", "Waitlisted"],
    default: "Confirmed",
  },
  cancellationReason: String,
}, { timestamps: true });

// Indexing for faster lookups (Useful for User Dashboard or Admin Reports)
bookingSchema.index({ userId: 1, eventId: 1 });
bookingSchema.index({ transactionId: 1 });

export default mongoose.Model.Booking || mongoose.model("Booking", bookingSchema);
