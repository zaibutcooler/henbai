import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileType } from "./types";

const initialState: any = {
  user: null,
  image: "",
  firstName: "",
  lastName: "",
  isSeller: false,
  seller: null,
  dob: null,
  country: "",
  city: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.image = action.payload.image || null;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isSeller = action.payload.isSeller;
      state.seller = action.payload.seller || null;
      state.dob = action.payload.dob;
      state.country = action.payload.country;
      state.city = action.payload.city;
    },
    clearProfile: (state) => {
      state.user = initialState.user;
      state.image = initialState.image;
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.isSeller = initialState.isSeller;
      state.seller = initialState.seller;
      state.dob = initialState.dob;
      state.country = initialState.country;
      state.city = initialState.city;
    },
    setUserID: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { setProfile, clearProfile, setUserID } = profileSlice.actions;

export default profileSlice.reducer;
