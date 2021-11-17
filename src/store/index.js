import { configureStore } from "@reduxjs/toolkit";

import showCartSliceReducer from "./show-cart-slice";
import cartSliceReducer from "./cart-slice";
import authSliceReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    toggleCart: showCartSliceReducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
