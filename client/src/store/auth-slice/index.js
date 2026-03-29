import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser:(state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    }
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;