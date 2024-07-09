import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
