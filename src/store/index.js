import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './Auth';
import { cartSlice } from "./Cart";

const store = configureStore({
    reducer: { auth: authSlice.reducer, cart: cartSlice.reducer }
});

export default store;

export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;