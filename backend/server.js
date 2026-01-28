import app from "./app.js";
import { loadEnv } from "./config/env.config.js";
import {connectDB} from "./config/db.config.js";

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
