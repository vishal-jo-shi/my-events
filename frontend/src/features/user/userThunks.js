import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMyProfileAPI,
  updateProfileAPI,
  updateAvatarAPI,
  changePasswordAPI,
  deleteAccountAPI,
} from "./userAPI";

/* ================= GET PROFILE ================= */
export const getMyProfile = createAsyncThunk(
  "user/me",
  async (_, thunkAPI) => {
    try {
      const res = await getMyProfileAPI();
      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

/* ================= UPDATE PROFILE ================= */
export const updateMyProfile = createAsyncThunk(
  "user/updateMyProfile",
  async (data, thunkAPI) => {
    try {
      const res = await updateProfileAPI(data);
      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

/* ================= UPDATE AVATAR ================= */
export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (image, thunkAPI) => {
    try {
      const res = await updateAvatarAPI(image);
      return res.data.avatar;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

/* ================= CHANGE PASSWORD ================= */
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (data, thunkAPI) => {
    try {
      await changePasswordAPI(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

/* ================= DELETE ACCOUNT ================= */
export const deleteAccount = createAsyncThunk(
  "user/deleteAccount",
  async (_, thunkAPI) => {
    try {
      await deleteAccountAPI();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);
