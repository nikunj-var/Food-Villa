import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
// store in application
const appStore = configureStore({
  // create cart slice
  //   store all the reducer here
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
