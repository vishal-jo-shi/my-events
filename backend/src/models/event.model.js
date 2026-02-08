import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Music', 'Tech'
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  
  // Location & Attendance
  attendanceMode: { 
    type: String, 
    enum: ["online", "offline", "mixed"], 
    default: "offline" 
  },
  location: String, // Physical address
  virtualLink: String, // Zoom/Meet link
  
  // Booking Details
  price: { type: Number, default: 0 },
  currency: { type: String, default: "INR" },
  totalSeats: { type: Number, required: true },
  remainingSeats: { type: Number },
  
  // Relations
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  
  // Meta
  images: {
    thumbnail: { 
      type: String, 
      required: true,
      default: 'placehold.co' // Useful for UI fallback
    },
    banner: { 
      type: String, 
      required: true,
      default: 'placehold.co'
    },
    gallery: [{ 
      type: String // Array for "other" event photos
    }]
  },
  status: {
    type: String,
    enum: ["draft", "approved", "rejected", "cancelled","completed"],
    default: "draft",
  },
  isApproved: {
  type: Boolean,
  default: false
  },
  deletedAt: { type: Date, default: null }
}, { timestamps: true });

// Pre-save hook to set remainingSeats initially
eventSchema.pre("save", function () {
  if (this.isNew) {
    this.remainingSeats = this.totalSeats;
  }
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);

