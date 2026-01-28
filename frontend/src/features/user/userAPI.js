import api from "../../api/axios";

export const fetchProfileAPI = () => api.get("/user/me");
export const updateProfileAPI = (data) =>
  api.put("/user/profile", data);
