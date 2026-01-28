/* ✅ Centralized environment object for Frontend */
const env = {
  // Use import.meta.env for Vite projects
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5100',
  
};

// Validation (similar to your backend logic)
if (!import.meta.env.VITE_API_URL) {
  console.warn("⚠️ VITE_API_URL is not defined. Using fallback.");
}

export default env;