import { createSlice } from "@reduxjs/toolkit";


const initialAuthenticatedState = {
  isAuthenticated: false,
};

const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState: initialAuthenticatedState,
  reducers: {
    login (state) {
      state.isAuthenticated = true;
    },
    logout (state) {
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authenticatedSlice.actions;
export default authenticatedSlice.reducer;
