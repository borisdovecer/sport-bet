import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./interfaces.ts";

const initialState: IUserState = {
  username: null,
  token: null,
};

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUserState, action: PayloadAction<IUserState>): void => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state: IUserState): void => {
      state.username = null;
      state.token = null;
    },
  },
});

// Export the actions
export const { setUser, logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
