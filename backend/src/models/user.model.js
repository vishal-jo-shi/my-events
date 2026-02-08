import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  userName: { type: String, trim: true, required: true ,unique:true},
  email: { type: String, unique: true, lowercase: true, trim: true, required: true },
  password: { type: String, required: true, select: false }, // 'select: false' hides password by default in queries
  role: {
    type: String,
    enum: ["user", "organizer_temp", "organizer", "admin"],
    default: "user",
  },
  isVerified: { type: Boolean, default: false },
  status: { type: String, 
            enum: ["active", "blocked", "suspended", "banned","inactive"], 
            default: "active" 
  },
  lastLogin: Date,
  deletedAt: { type: Date, default: null },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);