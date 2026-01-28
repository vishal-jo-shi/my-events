import axios from "axios";
import env from "../config/env.config";

const api = axios.create({
  baseURL: env.apiUrl || "http://localhost:5100/api",
  withCredentials: true, // 🔴 REQUIRED for cookie JWT
});

export default api;