import { createSlice } from "@reduxjs/toolkit";

// createSlice is a function that takes configuration
const cartSlice = createSlice({
  name: "cart",
  // cart items
  initialState: {
    items: [],
  },
  //   reducers are api that communicate with item store
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // either do this state.items.length = 0; or directly return empty array because state.items.length = 0; -> originalState = [] this line also do the same thing
      return { items: [] };
    },
  },
});
// actions and reducers
// we have to export two things action and reducers.

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
