import { createSlice } from "@reduxjs/toolkit";
import {
  getMyProfile,
  updateMyProfile,
  updateAvatar,
  changePassword,
  deleteAccount,
} from "./userThunks";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,     // full user object
    loading: false,
    error: null,
  },
  reducers: {
    clearUserState: (state) => {
      state.profile = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ================= GET PROFILE ================= */
      .addCase(getMyProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(getMyProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      /* ================= UPDATE PROFILE ================= */
      .addCase(updateMyProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })

      /* ================= UPDATE AVATAR ================= */
      .addCase(updateAvatar.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.avatar = action.payload;
        }
      })

      /* ================= CHANGE PASSWORD ================= */
      .addCase(changePassword.rejected, (state, action) => {
        state.error = action.payload;
      })

      /* ================= DELETE ACCOUNT ================= */
      .addCase(deleteAccount.fulfilled, (state) => {
        state.profile = null;
      });
  },
});

export const { clearUserState } = userSlice.actions;
export default userSlice.reducer;
