import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch users from the API
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await axios.get("https://fakestoreapi.com/users");
  console.log(res.data); // Log the response data for debugging
  return res.data;
});

// Create the user slice
const user = createSlice({
  name: "user",
  initialState: {
    user: [], // List of users fetched from the API
    loading: null,
    error: null,
    currentEmail: "", // Email entered by the user
    currentPassword: "", // Password entered by the user
    isLogin: "false", // Login status
    errorMessage: null, // Error message for UI
  },
  reducers: {
    // Set the email entered by the user
    setEmail: (state, action) => {
      state.currentEmail = action.payload;
    },
    // Set the password entered by the user
    setPassword: (state, action) => {
      state.currentPassword = action.payload;
    },
    // Logout action to reset login status
    logout: (state) => {
      state.isLogin = "false";
    },
  },
  extraReducers: (builder) => {
    // Handle the pending state for fetchUser
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = "loading";
      state.error = null;
    });

    // Handle the fulfilled state for fetchUser
    builder.addCase(fetchUser.fulfilled, (state, action) => {
    //   console.log(action.payload, "in builder.addcase fulfilled");
    //   console.log(state.currentEmail, state.currentPassword);

      // Find a user with the matching email and password
      const user = action.payload.find(
        (user) =>
          user.email.trim().toLowerCase() === state.currentEmail.trim().toLowerCase() &&
          user.password === state.currentPassword // Assuming password is stored as plaintext
      );

      if (user) {
        state.isLogin = "true";
        state.error = null;
      } else {
        state.isLogin = "false";
        state.error = "User not found";
      }

      state.loading = null;
    });

    // Handle the rejected state for fetchUser
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = "Error calling API";
      state.loading = null;
    });
  },
});

// Export actions for use in components
export const { setEmail, setPassword, logout } = user.actions;

// Export the reducer to include in the Redux store
export default user.reducer;
