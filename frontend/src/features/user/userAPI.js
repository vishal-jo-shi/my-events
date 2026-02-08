import api from "../../api/axios";

/* PROFILE */
export const getMyProfileAPI = () => api.get("/user/me");
export const updateProfileAPI = (data) => api.put("/users/me", data);

/* AVATAR (direct Cloudinary upload → send URL here) */
export const updateAvatarAPI = (image) =>
  api.patch("/users/me/avatar", { image });

/* PASSWORD */
export const changePasswordAPI = (data) =>
  api.patch("/users/me/change-password", data);

/* DELETE ACCOUNT */
export const deleteAccountAPI = () => api.delete("/users/me");
