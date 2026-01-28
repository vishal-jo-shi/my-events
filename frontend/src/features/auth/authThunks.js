import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, logoutAPI , checkAuthAPI} from "./authAPI";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await loginAPI(data);
      return res.data.user; // { id, role }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      await registerAPI(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await logoutAPI();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const res = await checkAuthAPI();
      return res.data.user; // success case
    } catch (err) {
      if (err.response?.status === 401) {
        // 👇 NORMAL: user is not logged in
        return thunkAPI.rejectWithValue(null);
      }
      // 👇 REAL error only
      throw err;
    }
  }
);
