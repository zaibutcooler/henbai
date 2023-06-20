import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Token {
  value: string;
}

const initialState: Token = {
  value: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.value = "";
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
