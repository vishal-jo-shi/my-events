import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, checkAuth } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,        // { id, role }
    isAuthenticated: false,
    authChecked: false, // checking auth to keep user log in buy checking the expiry of token
    loading: false,
    error: null,
  },
  reducers: {
    clearAuthState: (state) => {
      state.user=null,   
      state.isAuthenticated=false,
      state.authChecked=false,
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })

      //Checking if user LogedIn
      .addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authChecked = true;
    })
    .addCase(checkAuth.rejected, (state) => {
      // 👇 guest state
      state.user = null;
      state.isAuthenticated = false;
      state.authChecked = true;
    });

  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
