import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "toggleCart",
  initialState: { showCart: false },
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const showCartActions = showCartSlice.actions;

export default showCartSlice.reducer;
