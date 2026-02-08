export const loadEnv = () => {
  const requiredVars = [
    "PORT",
    "MONGO_URI",
    "JWT_SECRET",
    "JWT_EXPIRES_IN",
    "FRONTEND_URL",
    "STRIPE_SECRET_KEY",
    "STRIPE_WEBHOOK_SECRET",
  ];

  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`❌ Missing environment variable: ${key}`);
    }
  });

  console.log("✅ Environment variables validated");
};
