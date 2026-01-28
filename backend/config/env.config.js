import dotenv from "dotenv";

export const loadEnv = () => {
  dotenv.config();

  const requiredVars = [
    "PORT",
    "MONGO_URI",
    "JWT_SECRET",
    "JWT_EXPIRES_IN",
    "FRONTEND_URL"
  ];

  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`❌ Missing environment variable: ${key}`);
    }
  });

  console.log("✅ Environment variables loaded");
};


// import dotenv from "dotenv";

// // Load .env into process.env
// dotenv.config();

// const requiredVars = [
//   "PORT",
//   "MONGO_URI",
//   "JWT_SECRET",
//   "JWT_REFRESH_SECRET",
//   "JWT_EXPIRES_IN",
//   "FRONTEND_URL"
// ];

// requiredVars.forEach((key) => {
//   if (!process.env[key]) {
//     throw new Error(`❌ Missing environment variable: ${key}`);
//   }
// });

// /* ✅ Centralized environment object */
// const env = {
//   // nodeEnv: process.env.NODE_ENV || "development",
//   port: process.env.PORT || 5000,

//   mongoUri: process.env.MONGO_URI,

//   jwt: {
//     secret: process.env.JWT_SECRET,
//     expiresIn: process.env.JWT_EXPIRES_IN || "7d",
//   },

//   frontendUri:process.env.FRONTEND_URL,

//   // cloudinary: {
//   //   cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//   //   apiKey: process.env.CLOUDINARY_API_KEY,
//   //   apiSecret: process.env.CLOUDINARY_API_SECRET,
//   // },

//   // mail: {
//   //   email: process.env.SMTP_EMAIL,
//   //   password: process.env.SMTP_PASSWORD,
//   // },
// };

// export default env;

