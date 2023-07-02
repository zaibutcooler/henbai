import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthType {
  profileID: string;
  token: string;
  isSeller: boolean;
  isAuthenticatd: boolean;
}

const initialState: AuthType = {
  profileID: "",
  token: "",
  isSeller: false,
  isAuthenticatd: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthType>) => {
      state.isAuthenticatd = action.payload.isAuthenticatd;
      state.profileID = action.payload.profileID;
      state.isSeller = action.payload.isSeller;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.isAuthenticatd = false;
      state.profileID = "";
      state.isSeller = false;
      state.token = "";
    },
    setProfileID: (state, action: PayloadAction<string>) => {
      state.profileID = action.payload;
    },
  },
});

export const { setUser, clearUser, setProfileID } = userSlice.actions;
export default userSlice.reducer;
