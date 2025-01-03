import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  notifications: [],
  triggerFetch: false,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      state.triggerFetch = !state.triggerFetch;
      state.isAuthenticated = true;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.notifications = [];
      state.isAuthenticated = false;
    },
    setNotifications: (state, action) => {
      if (Array.isArray(action.payload)) {
        console.log(action.payload);
        state.notifications = action.payload;
      } else {
        console.error("Invalid payload for notifications:", action.payload);
      }
    },
  },
});

export const {
  signInFailure,
  signInSuccess,
  signInStart,
  updateStart,
  updateSuccess,
  updateFailure,
  signOutSuccess,
  setNotifications,
} = userSlice.actions;

export default userSlice.reducer;
