import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProfileAPI } from "./userAPI";

export const fetchProfile = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    try {
      const res = await fetchProfileAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
