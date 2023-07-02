import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  showNavBar: true,
};

const visualSlice = createSlice({
  name: "visual",
  initialState,
  reducers: {
    closeNavbar: (state) => {
      state.visual.showNavBar = false;
    },
    showNavbar: (state) => {
      state.visual.showNavbar = true;
    },
  },
});

export const { closeNavbar, showNavbar } = visualSlice.actions;
export default visualSlice.reducer;
