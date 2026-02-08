import dotenv from "dotenv";
dotenv.config(); // 🔥 MUST be first
import app from "./src/app.js";
import { loadEnv } from "./src/config/env.config.js";
import {connectDB} from "./src/config/db.config.js";

/* Start server */
const startServer = async () => {
  try {
    loadEnv();
    await connectDB();

    app.listen(process.env.PORT || 5100, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start", error);
    process.exit(1);
  }
};

startServer();
