import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});
